import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import GlobalStyles from '@mui/material/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: "#E5E5E5", margin: 0, boxSizing: "border-box", padding: 0
          },
        }}
      />
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </>
  );
}

export default App;
