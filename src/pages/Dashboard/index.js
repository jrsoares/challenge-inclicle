import { useEffect, useState } from 'react';
import { Typography, Box, FormControl, Select, MenuItem, Button, Container } from '@mui/material'
import Header from '../../components/Header'
import { EndomarketingList } from '../../components/EndomarketingList';
import CardInfo from '../../components/CardInfo'
import AddIcon from '@mui/icons-material/Add';
import CardGestao from '../../components/CardGestao';
import api from '../../service/data.json';
import { confirmDialog } from '../../components/ConfirmDialog';


export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(api.data)
  }, [])

  const handleSubmit = () => {
    console.log('Okay')
  }


  return (
    <>
      <Box sx={{
        maxWidth: "1366px",
        margin: "0 auto",
      }}>
        <Header />
        <Button onClick={() => confirmDialog('Certeza de excluir esse post ?', handleSubmit)}>Open dialog</Button>
        <Container>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { md: '1fr 279px', xs: '1fr' },
            gap: "30px",
            marginTop: "35px",

          }}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h1" sx={{
                  color: "#707070",
                  fontWeight: "300",
                  fontFamily: "Open Sans",
                  fontSize: "35px",
                }}>
                  Endomarketing
                </Typography>
                <Box sx={{ display: "flex", marginBottom: "14px" }} >
                  <FormControl>
                    <Select
                      sx={{ width: "95px", height: "38px", backgroundColor: "#fff", marginRight: "10px" }}
                      value={{}}
                      onChange={{}}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <MenuItem value="">
                        <em>TIPO</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <Button variant="contained" sx={{
                      backgroundColor: "#3489B1",
                      width: "103px",
                      height: "38px",
                    }}>Criar <AddIcon sx={{
                      marginLeft: "10px",
                      fontSize: "18px",
                      color: "#fff"
                    }} />
                    </Button>
                  </FormControl>
                </Box>
              </Box>
              {data && data.map(item => (<EndomarketingList key={item.id} data={item} />))}
            </Box>
            <Box sx={{ display: 'grid', gap: "17px" }}>
              <CardInfo />
              <CardGestao />
            </Box>
          </Box>
        </Container>


      </Box>
    </>
  )
}