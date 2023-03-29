/* eslint-disable react/prop-types */
import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import axios, { Axios } from 'axios';
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
    changeMovie, userObject, keyCode, uniqueArray, userName,
  } = props;

  const rows = uniqueArray.map((movie) => createData(movie.title, movie.img, movie));
  const trailerPlay = (movie) => {
    changeMovie(movie);
  };
  const [User, setUser] = React.useState({});
  const setUserObj = (user) => setUser(user);
  // adds movie to watch list
  const addMovie2WL = (movie) => {
    // checks if keycode exists and if doesnt makes the key of the keycode
    if (!userObject.movieList || !userObject.movieList[keyCode]) {
      userObject.movieList[keyCode] = [];
      userObject.movieList[keyCode].push(movie);
    } else {
      userObject.movieList[keyCode].push(movie);
    }

    const body = {
      userName,
      movieList: userObject.movieList,
    };
    axios.post('/UserObject', body)
      .then((response) => {
        console.log(response.data);
        setUserObj(userObject); // <-- Update state here if needed
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200, maxHeight: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Unique Programs</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Watch Trailer</TableCell>
              <TableCell align="right">Add To WatchList</TableCell>
            </TableRow>
          </TableHead>
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
                  <Button variant="contained" color="secondary" onClick={() => addMovie2WL(row.name)}>
                    Add To WatchList
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="watch">
        <WatchList userObject={userObject} keyCode={keyCode} />
      </div>
    </>
  );
}
export default BasicTable;
