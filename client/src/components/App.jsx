/* eslint-disable import/extensions */
import React from 'react';
import Button from '@mui/material/Button';
import Story2 from './Story2/Story2.jsx';
import Video from './ThumUpDown/Video.jsx';
import MediaInfo from './Story3/MediaInfo.jsx';
import Map from './ThumUpDown/Map.jsx';

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
      userName: 'username',
    };
    this.changeMovie = this.changeMovie.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  changeMovie(movie) {
    this.setState({ selectedMovie: movie });
  }

  changeUser(user) {
    this.setState({ userName: user });
  }

  render() {
    const { userName, selectedMovie } = this.state;
    return (
      <div>
        <Button variant="contained">Hello World</Button>
        <Story2 changeMovie={this.changeMovie} userName={userName} />
        <Video />
        <Map />
        {/* <MediaInfo selectedMovie={selectedMovie} /> */}
        {/* <YouTubePlayer /> */}
      </div>
    );
  }
}

export default App;
