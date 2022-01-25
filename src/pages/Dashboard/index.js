import { Typography, Box, FormControl, Select, MenuItem, Button } from '@mui/material'
import Header from '../../components/Header'
import { EndomarketingList } from '../../components/EndomarketingList'
import AddIcon from '@mui/icons-material/Add';
export default function Dashboard() {
  return (
    <>
      <Box sx={{
        width: "1366px",
        margin: "0 auto"
      }}>
        <Header />
        <Box sx={{
          marginLeft: "78px",
          width: "810px",
        }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{
              color: "#707070",
              fontWeight: "300",
              fontFamily: "Open Sans",
              fontSize: "35px",

            }}>
              <h1>Endomarketing</h1>
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }} s>
              <FormControl sx={{ m: 1 }}>
                <Select
                  sx={{ width: "95px", height: "38px", backgroundColor: "#fff" }}
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
                  backgroundColor: "#3489B1", width: "103px",
                  height: "38px",
                }}>Criar <AddIcon sx={{
                  marginLeft: "10px",
                  fontSize: "18px"
                }} />
                </Button>
              </FormControl>
            </Box>
          </Box>
          <EndomarketingList />
        </Box>
      </Box>
    </>
  )
}