import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './UserFeed.css';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [index, setIndex] = useState(0);
  function handleClick(event) {
    console.log(`Clicked ${event}`);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % activityFeedUsers.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [activityFeedUsers.length]);
  // error
  function iterateMostRecentArray(dataObject) {
    const keys = Object.keys(dataObject);
    keys.sort((a, b) => b - a);
    const mostRecentKey = keys[0];
    //
    const mostRecentArray = dataObject[mostRecentKey];
    return mostRecentArray;
  }

  const user = activityFeedUsers[index]; // 0Obj
  // error
  // resolve when data returns
  const userMovieList = iterateMostRecentArray(user.movieList);

  const mostRecentMovies = userMovieList;// movielist
  console.log(mostRecentMovies);

  return (
    <Paper sx={{ p: 2, width: 300, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Activity Feed
      </Typography>
      {/* Add a div to wrap the user name */}
      <div className="username-container">
        {/* Add a CSS class to animate the transition */}
        <Typography className="username" variant="body1" onClick={() => console.log(user.userName)}>
          {user && user.userName}
        </Typography>
      </div>
      {mostRecentMovies && mostRecentMovies.map((movie, index) => (
        <Typography key={index} variant="body2" onClick={() => handleClick(movie)}>
          {movie.name}
        </Typography>
      ))}
    </Paper>
  );
}

export default UserFeed;
