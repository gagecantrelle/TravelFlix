import React, { useState } from 'react';
// import { Card } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import VideoList from '../ThumUpDown/VideoList.jsx';
import YouTubePlayer from './YouTubePlayer.jsx';

function MediaInfo(props) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [videoId, setVideoId] = useState(null);
  // eslint-disable-next-line react/prop-types
  const { title, poster, synopsis } = props.selectedMovie;

  function handleClick() {
    console.log('Opening YouTube player...');
    axios.post('/search', {
      title,
    }).then((response) => {
      setVideoId(response.data);
      setShowTrailer(true);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
  // <Card sx={{ minWidth: 275, height: '275px', width: '275px' }}>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1">
          <img src={poster} alt={title} width="100" />
        </Typography>
        <Typography variant="body2">
          {synopsis}
        </Typography>
        <Typography variant="body3">
          <VideoList />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Watch Trailer</Button>
      </CardActions>
      {showTrailer && <YouTubePlayer id={videoId} />}
    </Card>
  );
}

export default MediaInfo;
