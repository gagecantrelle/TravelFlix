import React from 'react';
import Button from '@mui/material/Button';
import VideoList from './VideoList.jsx';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {      
      };
    };

  render(){
    return (<div>
     <Button variant="contained">Hello World</Button>
      <p>You clicked  times.</p>
      <button >Click me!</button>
      <VideoList />
    </div>)
  }};
export default App;
