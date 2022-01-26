import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { MoreHoriz } from '@mui/icons-material';

export function EndomarketingList({ data }) {

  return (
    <Box sx={{ marginBottom: "10px", backgroundColor: "#fff", padding: "15px", display: 'flex', boxShadow: 3 }
    }>
      <>
        <Box component="img" src={`${data.file.url}`} sx={{
          maxWidth: '73px', height: '73px'
        }} />
        <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%", justifyContent: 'space-between', marginLeft: "16px" }}>
          <Typography sx={{
            fontWeight: '700', fontSize: '16px', color: "#707070", marginBottom: '5px',
          }} >
            {data.title}
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
              {data.type}
            </Typography>
            <Typography sx={{ fontSize: '10px', fontFamily: "Open Sans", color: "#707070" }}>
              {/* {data.type.info.date} */}
            </Typography>
          </Box>
          <Typography sx={{
            color: "#707070",
            fontWeight: "300",
            fontFamily: "Open Sans",
            fontSize: "13px",
            marginTop: "10px",
          }}>
            {data.description}
          </Typography>
        </Box>
        <Button size="small">
          <MoreHoriz sx={{ color: "#707070" }} />
        </Button>
      </>

    </Box>
  );
}
