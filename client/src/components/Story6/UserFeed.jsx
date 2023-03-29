import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [index, setIndex] = useState(0);
// creates a click function to query the db for the movie clicked
  function handleClick(event) {
   
    console.log(`Clicked ${event}`);
    // axios.post('/searchFeed', {
    //   event,
    // }).then((response) => {
    //   setVideoId(response.data);
    //   setShowTrailer(true);
    // })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % activityFeedUsers.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [activityFeedUsers.length]);

  const user = activityFeedUsers[index];

  const movieList = user && user.movieList;
  const movies = movieList ? movieList.split(', ') : [];

  return (
    <Paper sx={{ p: 2, width: 300, height: 150}}>
      <Typography variant="h6" gutterBottom>
        Activity Feed
      </Typography>
      <Typography variant="body1" onClick={() => console.log(user.userName)}>
        {user && user.userName}
      </Typography>
      {movies && movies.map((movie, index) => (
        <Typography key={index} variant="body2" onClick={() => handleClick(movie)} >
          {movie}
        </Typography>
      ))}
    </Paper>
  );
}

export default UserFeed;