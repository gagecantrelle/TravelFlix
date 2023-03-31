import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MediaInfo from '../Story3/MediaInfo.jsx';
// import './UserFeed.css';

function UserFeed(props) {
  const { activityFeedUsers } = props;
  const [index, setIndex] = useState(0);
  const [mediainfo, setMediaInfo] = useState(null);
  const [showMediaInfo, setShowMediaInfo] = useState(false);

  function handleClick(movie) {
    setMediaInfo(movie);
    setShowMediaInfo(true);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % activityFeedUsers.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activityFeedUsers.length]);

  const user = activityFeedUsers[index];
  const userMovieList = iterateMostRecentArray(user.movieList);
  
  const mostRecentMovies = userMovieList ? userMovieList.slice(0, 5) : [];

  function iterateMostRecentArray(dataObject) {
    const keys = Object.keys(dataObject);
    keys.sort((a, b) => b - a);
    const mostRecentKey = keys[0];
    const mostRecentArray = dataObject[mostRecentKey];
    return mostRecentArray;
  }

 

  return (
    <div style={{ position: 'relative' }}>
      <Paper sx={{ p: 2, width: 680, height: 200 }}>
        <Typography variant="h6" gutterBottom>
          Recent Watch Lists
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
      </Paper>

      {showMediaInfo && (
        <div style={{ position: 'absolute', top: '220px', left: 0 }}>
          <MediaInfo selectedMovie={mediainfo.trailer} />
        </div>
      )}
    </div>
  );
}

export default UserFeed;