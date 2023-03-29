import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function YouTubePlayer(props) {
  const playerRef = useRef(null);
  const { id } = props;
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
    }
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <Card sx={{
      width: 680, display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: '10px',
    }}
    >
      <CardContent>
        <YouTube
          videoId={id}
          opts={opts}
          onReady={(event) => {
            playerRef.current = event.target;
            return undefined;
          }}
        />
      </CardContent>
    </Card>
  );
}

export default YouTubePlayer;
