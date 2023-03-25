/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DestC from './DestC.jsx';
import OriginC from './OriginC.jsx';

function Story2() {
  const [originC, setOrigin] = React.useState('');
  const changeOrigin = (origin) => setOrigin(origin);
  const [destC, setDest] = React.useState('');
  const changeDest = (destination) => setDest(destination);
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box sx={{
          display: 'flex', justifyContent: 'space-around', bgcolor: 'white', height: '25vh',
        }}
        >
          {' '}
          <OriginC changeOrigin={changeOrigin} sx={{ flex: 1, marginLeft: '125px' }} />
          <Button variant="contained" endIcon={<FlightTakeoffIcon />} size="large" sx={{ width: 170, height: 90 }}> LFG </Button>
          <DestC changeDest={changeDest} sx={{ flex: 1, marginLeft: '125px' }} />

        </Box>

      </Container>
    </>

  );
}

export default Story2;
