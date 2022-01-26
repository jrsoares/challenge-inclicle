import React from 'react';
import create from 'zustand';

import { Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions, Button, Box, IconButton } from '@mui/material';
import { Close } from "@mui/icons-material";

const ConfirmDialogStore = create((set) => ({
  message: '',
  onSubmit: undefined,
  close: () => set({ onSubmit: undefined })
}));

export function confirmDialog(message, onSubmit) {
  ConfirmDialogStore.setState({
    message,
    onSubmit
  })
}

const ConfirmDialog = () => {
  const { message, onSubmit, close } = ConfirmDialogStore()
  return (
    <Dialog open={Boolean(onSubmit)} onClose={close} maxWidth="sm" fullWidth>
      <DialogTitle>Confirmar ?</DialogTitle>
      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={close}>
          <Close />
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color='primary' variant='contained' onClick={() => {
          if (onSubmit) {
            onSubmit()
          }
          close();
        }}>
          Sim
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog

