import React, { useState } from 'react';
// import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VideoList from '../VideoList.jsx';
import YouTubePlayer from './YouTubePlayer.jsx';

function MediaInfo(props) {
  const [showTrailer, setShowTrailer] = useState(false);

  function handleClick() {
    console.log('Opening YouTube player...');
    // console.log(props)
    setShowTrailer(true);
  }

  return (
  // <Card sx={{ minWidth: 275, height: '275px', width: '275px' }}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.selectedMovie.title}
        </Typography>
        <Typography variant="body2">
          {props.selectedMovie.synopsis}
        </Typography>
        <Typography variant="body2">
          <VideoList />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Watch Trailer</Button>
      </CardActions>
      {showTrailer && <YouTubePlayer title={props.selectedMovie.title} />}
    </Card>
  );
}

export default MediaInfo;
