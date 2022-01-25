import { Box } from '@mui/material';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Box sx={{
      bgcolor: "#FFFFFF",
      padding: "9px 40px",
      height: "55px",
    }}>
      <Link to="/"><img src="./assets/images/logo.svg" alt="logo" /></Link>
    </Box>
  )
}