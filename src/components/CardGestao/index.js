import * as React from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { CardGestaoItem } from '../CardGestaoItem';

export default function CardGestao() {
  return (
    <Box sx={{
      backgroundColor: "#FDFDFD", padding: "10px", borderRadius: "5px", boxShadow: 3
    }}>
      < Box >
        <Typography sx={{ fontSize: '16px', fontWeight: '700', padding: "5px", marginBottom: "12px", color: "#707070", }}  >
          Quadros de Gestão à Vista
        </Typography>
        <CardGestaoItem />
      </Box>
    </ Box>
  );
}
