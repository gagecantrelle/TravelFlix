/* eslint-disable import/extensions */
import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Story2 from './Story2/Story2.jsx';
import DarkModeSwitch from './DarkModeSwitch.jsx';
import MediaInfo from './Story3/MediaInfo.jsx';
import UserFeed from './Story6/UserFeed.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      selectedMovie: {
        title: 'The Goat and Her Three Kids',
        img: 'https://occ-0-2758-3467.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcAhg7Ed9mUM0OwBbe0DMWKmi9W4HcbSYhpju4xeMRr1WODB1iVTACz8_XS7JP32HKU5UmHoy0a-5hh70yVj9eYehl1jSatX3g.jpg?r=852',
        title_type: 'movie',
        netflix_id: 81677719,
        synopsis: 'A determined widow must protect her three children from a bloodthirsty neighbor bent on revenge in this gruesome spin on the beloved fairy tale.',
        rating: '9.8',
        year: '2022',
        runtime: '4972',
        imdb_id: 'tt9243412',
        poster: 'https://m.media-amazon.com/images/M/MV5BNWUxOGM3ZWUtOTUzZS00ODQwLTlkMmUtZjhkYTNhM2JkNGUxXkEyXkFqcGdeQXVyNTI0MjQyMDU@._V1_SX300.jpg',
        top250: 0,
        top250tv: 0,
        title_date: '2023-03-24',
      },
      userName: 'fred',
      userObject: {},
      activityFeedUsers: {},
      darkTheme: createTheme({
        palette: {
          mode: 'dark',
        },
      }),
    };
    this.changeMovie = this.changeMovie.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.getUserObject = this.getUserObject.bind(this);
    this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  componentDidMount() {
    this.getUserObject();
    this.getUsers();
    
  }

  getUsers() {
    axios.get('/users')
      .then((data) => this.setState({ activityFeedUsers: data.data }));
  }

  getUserObject() {
    const { userName } = this.state;
    const param = { userName };

    axios.get('/userObject', { params: param })
      .then((data) => this.setState({ userObject: data }));
  }

  changeMovie(movie) {
    this.setState({ selectedMovie: movie });
  }

  changeUser(user) {
    this.setState({ userName: user });
  }

  // eslint-disable-next-line react/sort-comp
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

  render() {
    const { userName, selectedMovie, darkTheme, activityFeedUsers } = this.state;
    if (activityFeedUsers === null) {
      return <div>Loading...</div>;
    }
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />

        <div>
          <UserFeed activityFeedUsers={activityFeedUsers}/>
          <Button variant="contained">Hello World</Button>
          {/* {this.state.userObject} */}
          <DarkModeSwitch
            isDarkMode={darkTheme.palette.mode === 'dark'}
            onToggle={this.handleDarkModeToggle}
          />
          <Story2 changeMovie={this.changeMovie} userName={userName} />

          <MediaInfo selectedMovie={selectedMovie} />

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
