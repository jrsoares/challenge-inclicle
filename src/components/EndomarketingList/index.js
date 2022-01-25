import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MoreHoriz } from '@mui/icons-material';

export function EndomarketingList() {
  return (
    <Box sx={{ marginBottom: "10px", backgroundColor: "#fff", padding: "8px 11px", display: 'flex' }}>
      <img src="./assets/images/1.png" alt="" />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%", justifyContent: 'space-between', marginLeft: "16px" }}>
        <Typography sx={{
          fontWeight: '700', fontSize: '16px', color: "#707070", marginBottom: '5px',
        }} >
          Geral dispensado para curtir o feriado
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3489B1', width: '100px', height: '20px', fontSize: '10px', fontWeight: '700', color: "#eee", marginRight: '10px', fontFamily: "Open Sans"
          }} >
            COMUNICADO
          </Typography>
          <Typography sx={{ fontSize: '10px', fontFamily: "Open Sans", color: "#707070" }}>
            13 DE OUT
          </Typography>
        </Box>
        <Typography sx={{
          color: "#707070",
          fontWeight: "300",
          fontFamily: "Open Sans",
          fontSize: "13px",
          marginTop: "10px",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt...
        </Typography>
      </Box>
      <Button size="small">
        <MoreHoriz sx={{ color: "#707070" }} />
      </Button>
      <Box>

      </Box>

    </Box >
  );
}
