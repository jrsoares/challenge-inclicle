import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CardInfo() {
  return (
    <Box sx={{ height: { md: "309px", xs: 'auto' }, backgroundColor: "#FFF2DE", padding: "28px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid #DCD1C0" }}>
      <Box sx={{
        marginBottom: { xs: '15px' }
      }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold', marginBottom: "12px", color: "#707070", }} >
          Endormarketing
        </Typography>
        <Typography sx={{ fontSize: '14px', fontFamily: 'Open Sans', color: "#707070" }}>
          Endomarketing está relacionado às
          ações de treinamento ou qualificação
          dos colaboradores da empresa
          visando um melhor serviço para o
          cliente. Marketing interno, devido ao
          nome, é usualmente confundido com
          Endomarketing mesmo sendo
          conceitos diferentes.
        </Typography>
      </Box>
      <Box>
        <Button sx={{
          color: "#707070", border: "1px solid #707070"
        }} variant="outlined">Dispensar</Button>
      </Box>
    </Box>
  );
}
