import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
          <OriginC changeOrigin={changeOrigin} sx={{ flex: 1, marginLeft: '100px' }} />
          <DestC changeDest={changeDest} sx={{ flex: 1, marginLeft: '100px' }} />

        </Box>

      </Container>
    </>
  );
}

export default Story2;
