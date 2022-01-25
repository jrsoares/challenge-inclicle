import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Header from '../../components/Header'
import { EndomarketingList } from '../../components/EndomarketingList'


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
          <Typography>
            <h1>Endomarketing</h1>
          </Typography>
          <EndomarketingList />
        </Box>
      </Box>

    </>
  )
}