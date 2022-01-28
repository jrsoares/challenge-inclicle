import { useEffect, useState } from 'react';
import { Typography, Box, FormControl, Select, MenuItem, Button, Container, InputLabel, Checkbox, OutlinedInput, ListItemText } from '@mui/material'
import Header from '../../components/Header'
import { EndomarketingList } from '../../components/EndomarketingList';
import CardInfo from '../../components/CardInfo'
import AddIcon from '@mui/icons-material/Add';
import CardGestao from '../../components/CardGestao';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function Dashboard() {

  const [data, setData] = useState([]);
  const [listSelect, setListSelect] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchData() {

      const response = await axios.get('https://raw.githubusercontent.com/InCicle/frontend-test/main/data.json');
      const endomarketingWithConfirmations = [];

      response.data.data.forEach((item) => {
        if (item.type === 'event') {
          let confirmed = 0;
          let invited = item.invited_people.length
          item.invited_people.forEach((invite) => {
            if (invite.confirmed_presence) {
              confirmed++
            }
          })
          endomarketingWithConfirmations.push({
            ...item,
            confirmed: confirmed,
            invited: invited,
            visible: true
          })
        } else {
          endomarketingWithConfirmations.push({
            ...item,
            confirmed: 0,
            invited: 0,
            visible: true
          })
        }
      })
      setData(endomarketingWithConfirmations);
      const newListSelect = endomarketingWithConfirmations.map(item => (item.type));
      setListSelect([...new Set(newListSelect)]);
    }
    fetchData();
  }, []);

  function handleRemove(id) {
    const newList = data.filter((item) => { return item.id != id });
    setData(newList);
  }

  const handleChangeSelect = (event) => {
    const { target: { value } } = event;
    setTypes(
      typeof value === 'string' ? value.split(',') : value,
    );
    const newList = data.filter((item) => { return item.type == value });
    // setData(itemsFiltered);
    console.log(newList)
  };


  return (
    <>
      <Box sx={{
        maxWidth: "1366px",
        margin: "0 auto",
      }}>
        <Header />
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
                <Box sx={{ m: 1 }} >
                  <FormControl sx={{ marginRight: "8px" }} >
                    <InputLabel sx={{
                      marginTop: -1
                    }}>TIPO</InputLabel>
                    <Select
                      sx={{
                        width: "95px",
                        height: "38px"
                      }}
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={types}
                      onChange={handleChangeSelect}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(', ')}
                      MenuProps={MenuProps}
                    >
                      {listSelect.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={types.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
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
              {data && data.map(item => (<EndomarketingList key={item.id} data={item} onRemove={handleRemove} />))}
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