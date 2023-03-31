import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MediaInfo from '../Story3/MediaInfo.jsx';
import  Grid  from '@mui/material/Grid';

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
        </Typography>
        <div className="username-container" style={{ textAlign: 'center' }}>
          <Typography className="username" variant="body1" onClick={() => console.log(user.userName)}>
            {user && user.userName}
          </Typography>
        </div>
        <Grid container spacing={0}>
          {mostRecentMovies && mostRecentMovies.map((movie, index) => (
            <React.Fragment key={index}>
              <Grid item xs={6}>
                <List dense>
                  <ListItem button onClick={() => handleClick(movie)}>
                    <ListItemText primary={movie.name} />
                  </ListItem>
                </List>
              </Grid>
              {index % 2 === 1 && <Grid item xs={12} />}
            </React.Fragment>
          ))}
        </Grid>
      </Paper>
      {showMediaInfo && (
        <div style={{ position: 'absolute', top: '205px', left: 0 }}>
          <MediaInfo selectedMovie={mediainfo.trailer} />
        </div>
      )}
    </div>
  );
}

export default UserFeed;