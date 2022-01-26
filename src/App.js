import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import GlobalStyles from '@mui/material/GlobalStyles';
import ConfirmDialog from './components/ConfirmDialog';


function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#E5E5E5", margin: 0, boxSizing: "border-box", padding: 0, outline: 0,
            '-webkit-font-smoothing': 'antialiased'
          },
          button: {
            cursor: 'pointer'
          }
        }}
      />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ConfirmDialog />
    </>
  );
}

export default App;
