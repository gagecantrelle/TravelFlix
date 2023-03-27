import React from 'react';
import Button from '@mui/material/Button';
import MediaInfo from './MediaInfo.jsx';
import YouTubePlayer from './YouTubePlayer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div>
        <MediaInfo />
        {/* <YouTubePlayer /> */}
      </div>
    );
  }
}

export default App;
