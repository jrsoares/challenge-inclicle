import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MoreHoriz, Public } from '@mui/icons-material';


export function CardGestaoItem() {
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
          Demonstrativo comercial
        </Typography>
        <Box>
          <Public sx={{ color: "#707070", fontSize: '13px', marginRight: "5px" }} />
          <MoreHoriz sx={{ color: "#707070", fontSize: '13px' }} />
        </Box>
      </ Box>
      <Box sx={{
        marginTop: "5px",
        display: "flex",
        gap: "5px"
      }} >
        <img src="./assets/images/1.png" width="60px" height="60px" alt="" />
        <img src="./assets/images/1.png" width="60px" height="60px" alt="" />
        <img src="./assets/images/1.png" width="60px" height="60px" alt="" />
        <img src="./assets/images/1.png" width="60px" height="60px" alt="" />
      </Box>

    </Box >
  );
}
