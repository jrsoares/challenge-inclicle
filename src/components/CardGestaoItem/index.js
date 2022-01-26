import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MoreHoriz, Public } from '@mui/icons-material';
import Button from "@mui/material/Button";

import { confirmDialog } from '../../components/ConfirmDialog';


export function CardGestaoItem({ data }) {

  const handleSubmit = () => {
    console.log('Yes')
  }
  return (

    <Box sx={{
      marginBottom: "10px", padding: "5px", background: "rgba(52, 137, 177, 0.1)"
    }}>



      <Box sx={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between'
      }
      } >
        <Typography variant="h1" sx={{
          fontWeight: '400', fontSize: '13px', color: "#707070",
        }} >
          {data.title}
        </Typography>
        <Box>
          <Public sx={{ color: "#707070", fontSize: '13px', marginRight: "5px" }} />
          <Button onClick={() => confirmDialog('Teste', handleSubmit)}>
            <MoreHoriz sx={{ color: "#707070", fontSize: '13px' }} />
          </Button>
        </Box>
      </ Box>
      <Box sx={{
        marginTop: "5px",
        display: "flex",
        gap: "5px"
      }} >
        {data['resume_files'] && (data['resume_files'].map(item => (
          <img src={`${item.file}`} width="60px" height="60px" alt="" />
        )))}
      </Box>

    </Box >
  );
}
