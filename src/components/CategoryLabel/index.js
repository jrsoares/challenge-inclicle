import { Typography } from "@mui/material";

export default function CategoryLabel({ children }) {
  const colorKey = {
    release: '#3489B1',
    event: '#EE8686',
    publication: "#707070"
  }

  return (
    <Typography sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: `${colorKey[children]}`, width: '100px', height: '20px', fontSize: '10px', fontWeight: '700', color: "#eee", marginRight: '10px', fontFamily: "Open Sans"
    }} >
      {console.log(colorKey[children])}
      {children}
    </Typography>
  )
}