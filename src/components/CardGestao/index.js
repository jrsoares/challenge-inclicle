import { useState, useEffect } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { CardGestaoItem } from '../CardGestaoItem';
import axios from 'axios';


export default function CardGestao() {
  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchData() {

      const boards = await axios.get('https://raw.githubusercontent.com/InCicle/frontend-test/main/management.json')
      setData(boards.data.data[0].boards)
    }
    fetchData();
  }, []);

  function handleRemove(id) {
    const newList = data.filter((item) => { return item.title != id })
    setData(newList);
  }

  return (
    <Box sx={{
      backgroundColor: "#FDFDFD", padding: "10px", borderRadius: "5px", boxShadow: 3,
    }
    }>
      <Box>
        <Typography sx={{ fontSize: '16px', fontWeight: '700', padding: "5px", marginBottom: "12px", color: "#707070", }}  >
          Quadros de Gestão à Vista
        </Typography>
        {data && data.map((item) => (<CardGestaoItem key={item.title} data={item} onRemove={handleRemove} />))}
      </Box>
    </ Box >
  );
}
