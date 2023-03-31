/* eslint-disable react/prop-types */
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import axios from 'axios';
import WatchList from './WatchList.jsx';

function createData(
  name,
  image,
  trailer,
  addToWatchList,
) {
  return {
    name,
    image,
    trailer,
    addToWatchList,
  };
}

// creates the rows by taking data and extracting each movies data

function BasicTable(props) {
  const {
    changeMovie, userObject, keyCode, uniqueArray, userName, buttonClicked,
  } = props;

  const [User, setUser] = React.useState({ userObject });
  const setUserObj = (newUser) => {
    setUser(newUser);
  };
  // const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setUserObj(userObject);
  }, [buttonClicked]);

  const rows = uniqueArray.map((movie) => createData(movie.title, movie.img, movie));
  const trailerPlay = (movie) => {
    changeMovie(movie);
  };

  // adds movie to watch list
  const addMovie2WL = (movie) => {
    // copy user object
    const newUserObject = { ...User };
    // checks if keycode exists and if doesnt makes the key of the keycode
    if (!userObject.movieList || !userObject.movieList[keyCode]) {
      userObject.movieList[keyCode] = [];
      userObject.movieList[keyCode].push(movie);
    } else {
      userObject.movieList[keyCode].push(movie);
    }
    setUserObj(newUserObject);
    const body = {
      userName,
      movieList: userObject.movieList,
    };
    axios.post('/UserObject', body)
      .then((response) => {
        console.log(response.data);
        setUserObj(userObject);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
        <TableContainer
          component={Paper}
          sx={{
            width: '100%',
            maxHeight: '500px',
            minHeight: '500px',
            overflowY: 'auto',
          }}
        >
          <Table sx={{ minWidth: 300, maxHeight: 100 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <img src={row.image} alt={row.name} width="100" />
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => trailerPlay(row.trailer)}>
                      Get More Details
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="secondary" onClick={() => addMovie2WL(row)}>
                      Add To WatchList
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '500px', // Adjust this value to match your table's height
            minHeight: '500px',
            overflowY: 'auto',
            padding: '16px',
          }}
        >
          <WatchList
            buttonClicked={buttonClicked}
            userObject={User}
            keyCode={keyCode}
            userName={userName}
          />

        </Paper>
      </Grid>
    </Grid>
  );
}
export default BasicTable;
