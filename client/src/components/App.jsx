import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      count: 0,
    };
  }
  // const [count, setCount] = React.useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>You clicked  times.</p>
        <button>Click me!</button>
      </div>
    );
  }
}

export default App;
