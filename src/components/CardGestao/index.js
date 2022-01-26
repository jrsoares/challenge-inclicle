import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { CardGestaoItem } from '../CardGestaoItem';

import api from '../../service/management.json';

export default function CardGestao() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(api.data[0].boards)
  }, [])

  return (
    <Box sx={{
      backgroundColor: "#FDFDFD", padding: "10px", borderRadius: "5px", boxShadow: 3
    }
    }>
      <Box>
        <Typography sx={{ fontSize: '16px', fontWeight: '700', padding: "5px", marginBottom: "12px", color: "#707070", }}  >
          Quadros de Gestão à Vista
        </Typography>
        {console.log(data)}
        {data && data.map(item => (<CardGestaoItem key={item.id} data={item} />))}
      </Box>
    </ Box >
  );
}
