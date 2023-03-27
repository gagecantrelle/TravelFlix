import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';

function YouTubePlayer(props) {
  const playerRef = useRef(null);
  console.log(props.title);


  // axios.post('/search', {
  //   title: props.title,
  // }).then((response) => {
  //   console.log(response.data);
  // })
  //   .catch((error) => {
  //     console.log(error);
  //   });

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

  return <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={(event) => playerRef.current = event.target} />;
}

export default YouTubePlayer;
