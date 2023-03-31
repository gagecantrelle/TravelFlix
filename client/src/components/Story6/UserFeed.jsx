import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MediaInfo from '../Story3/MediaInfo.jsx';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [index, setIndex] = useState(0);
  const [mediainfo, setMediaInfo] = useState(null);

  function handleClick(movie) {
    setMediaInfo(movie);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % activityFeedUsers.length);
    }, 100000);

    return () => clearInterval(intervalId);
  }, [activityFeedUsers.length]);

  const user = activityFeedUsers[index];
  const userMovieList = iterateMostRecentArray(user.movieList);
  const mostRecentMovies = userMovieList.slice(0, 5);

  function iterateMostRecentArray(dataObject) {
    const keys = Object.keys(dataObject);
    keys.sort((a, b) => b - a);
    const mostRecentKey = keys[0];
    const mostRecentArray = dataObject[mostRecentKey];
    return mostRecentArray;
  }

  return (
    <Paper sx={{ p: 2, width: 300, height: 300 }}>
      <Typography variant="h6" gutterBottom>
        Activity Feed
      </Typography>
      <div className="username-container">
        <Typography className="username" variant="body1" onClick={() => console.log(user.userName)}>
          {user && user.userName}
        </Typography>
      </div>
      {mostRecentMovies && mostRecentMovies.map((movie, index) => (
        <Typography key={index} variant="body2" onClick={() => handleClick(movie)}>
          {movie.name}
        </Typography>
      ))}
      {mediainfo && <MediaInfo selectedMovie={mediainfo.trailer} />}
    </Paper>
  );
}

export default UserFeed;