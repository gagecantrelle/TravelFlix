import React from 'react';
import Button from '@mui/material/Button';
import Story2 from './Story2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Button variant="contained">Hello World</Button>
        <p>You clicked  times.</p>
        <button type="button">Click me!</button>

        <Story2 />
      </div>
    );
  }
}

export default App;
