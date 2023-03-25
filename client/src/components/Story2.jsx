import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CountryMen2 from './CountryMen2.jsx';
import CountryMen1 from './CountryMen1.jsx';

function Story2() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{
          display: 'flex', justifyContent: 'space-around', bgcolor: 'white', height: '25vh',
        }}
        >
          {' '}
          <CountryMen1 sx={{ flex: 1, marginLeft: '100px' }} />
          <CountryMen2 sx={{ flex: 1, marginLeft: '100px' }} />

        </Box>

      </Container>
    </>
  );
}

export default Story2;
