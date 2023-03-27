import React, { useState } from 'react';
// import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YouTubePlayer from './YouTubePlayer.jsx';

function MediaInfo() {
  const [showTrailer, setShowTrailer] = useState(false);
  const title = 'Title';

  function handleClick() {
    console.log('Opening YouTube player...');
    setShowTrailer(true);
  }

  return (
    <Card sx={{ minWidth: 275, height: '275px', width: '275px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          User Rating: 4.5/5
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>Watch Trailer</Button>
      </CardActions>
      {showTrailer && <YouTubePlayer title={title} />}
    </Card>
  );
}

export default MediaInfo;
