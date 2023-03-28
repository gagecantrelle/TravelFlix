/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import DestC from './DestC.jsx';
import OriginC from './OriginC.jsx';
import UniqueTable from './UniqueTable.jsx';

function Story2(props) {
  const [originC, setOrigin] = React.useState('');
  const changeOrigin = (origin) => setOrigin(origin);
  const [destC, setDest] = React.useState('');
  const changeDest = (destination) => setDest(destination);
  const [uniqueArray, setUniqueArray] = React.useState([]);
  const setUnique = (list) => setUniqueArray(list);
  const { changeMovie, userName } = props;
  // when LFG button is clicked make a call to the server to find unique items
  const findUnique = () => {
    const param = { origin: originC, destination: destC };
    axios.get('/findUnique', { params: param })
      .then((data) => setUnique(data.data))
      .catch();
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Stack spacing={4}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            // bgcolor: 'white', disabled for dark mode switch
            height: '12vh',
          }}
          >
            {' '}
            <OriginC changeOrigin={changeOrigin} sx={{ flex: 1, marginLeft: '125px' }} />
            <Button
              variant="contained"
              endIcon={<FlightTakeoffIcon />}
              size="large"
              onClick={findUnique}
              sx={{ width: 170, height: 90 }}
            >
              {' '}
              LFG
              {' '}

            </Button>
            <DestC changeDest={changeDest} sx={{ flex: 1, marginLeft: '125px' }} />

          </Box>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            bgcolor: 'white',
            height: '40vh',
          }}
          >
            <UniqueTable changeMovie={changeMovie} userName={userName} />
          </Box>
        </Stack>
      </Container>
    </>

  );
}

export default Story2;
