import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MoreHoriz } from '@mui/icons-material';


export function EndomarketingList() {
  return (
    <Card sx={{ width: '552', marginBottom: "10px" }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: "8px 11px" }}>
        <img src="./assets/images/1.png" alt="" />
        <CardContent>
          <Typography sx={{
            fontWeight: '700', fontSize: '16px', color: "#707070", marginBottom: '5px',
          }} >
            Geral dispensado para curtir o feriado
          </Typography>
          <Box sx={{
            display: 'flex',
          }}>
            <Typography sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3489B1', width: '50px', height: '15px', fontSize: '6px', fontWeight: '700', color: "#eee", marginRight: '5px', fontFamily: "Open Sans"
            }} >
              COMUNICADO
            </Typography>
            <Typography sx={{ fontSize: '9px', fontFamily: "Open Sans", color: "#707070" }}>
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
        </CardContent>
        <CardActions>
          <Button size="small">
            <MoreHoriz sx={{ color: "#707070" }} />
          </Button>
        </CardActions>
      </Box >
    </Card >
  );
}
