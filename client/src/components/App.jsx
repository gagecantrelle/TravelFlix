/* eslint-disable import/extensions */
import React, { Component } from 'react';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Story2 from './Story2/Story2.jsx';
import UserFeed from './Story6/UserFeed.jsx';
import DarkModeSwitch from './DarkModeSwitch.jsx';
import MediaInfo from './Story3/MediaInfo.jsx';

// import Map from './ThumUpDown/Map.jsx';
// import UserFeed from './Story6/UserFeed.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedMovie: null,
      userName: 'tom',
      userObject: {},
      activityFeedUsers: [],
      darkTheme: createTheme({
        palette: {
          mode: 'dark',
        },
      }),
      showMediaInfo: false,
      showUserFeed: false,
    };
    this.changeMovie = this.changeMovie.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.getUserObject = this.getUserObject.bind(this);
    this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    this.getUserObject();
    this.getUsers();
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove(event) {
    const { showUserFeed } = this.state;
    if (event.clientX < 10 && !showUserFeed) {
      this.setState({ showUserFeed: true });
    } else if (event.clientX > 700 && showUserFeed) {
      this.setState({ showUserFeed: false });
    }
  }

  handleDarkModeToggle() {
    const { darkTheme } = this.state;
    const newMode = darkTheme.palette.mode === 'dark' ? 'light' : 'dark';
    const newTheme = createTheme({
      palette: {
        mode: newMode,
      },
    });
    this.setState({ darkTheme: newTheme });
  }

  getUsers() {
    axios.get('/users')
      .then((data) => this.setState({ activityFeedUsers: data.data }));
  }

  getUserObject() {
    const { userName } = this.state;
    const param = { userName };

    axios.get('/UserObject', { params: param })
      .then((data) => this.setState({ userObject: data.data }));
  }

  changeMovie(movie) {
    this.setState({ selectedMovie: movie, showMediaInfo: true });
  }

  changeUser(user) {
    this.setState({ userName: user });
  }

  render() {
    const {
      userName, selectedMovie,
      darkTheme, activityFeedUsers,
      userObject, showMediaInfo,
      showUserFeed,
    } = this.state;

    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme />

        <div>
          <Drawer
            anchor="left"
            open={showUserFeed}
            onMouseEnter={() => this.setState({ showUserFeed: true })}
            onMouseLeave={() => this.setState({ showUserFeed: false })}
          >
            {activityFeedUsers && <UserFeed  activityFeedUsers={activityFeedUsers} />}
          </Drawer>

          <DarkModeSwitch
            isDarkMode={darkTheme.palette.mode === 'dark'}
            onToggle={this.handleDarkModeToggle}
            anchor="right"
          />

          <Story2 changeMovie={this.changeMovie} userName={userName} userObject={userObject} />

          {/* {selectedMovie && <MediaInfo selectedMovie={selectedMovie} />} */}
          {selectedMovie && (
            <Drawer
              anchor="right"
              open={showMediaInfo}
              onClose={() => this.setState({ showMediaInfo: false })}
            >
              <MediaInfo selectedMovie={selectedMovie} />
            </Drawer>
          )}

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
