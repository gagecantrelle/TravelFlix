import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

function YouTubePlayer(props) {
  const playerRef = useRef(null);
  console.log(props.id);

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.internalPlayer.pauseVideo();
    }
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={props.id}
      opts={opts}
      onReady={(event) => playerRef.current = event.target}
    />
  );
}

export default YouTubePlayer;
