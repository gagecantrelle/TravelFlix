/* eslint-disable linebreak-style */
import React from 'react';
import axios from 'axios';
import { Toolbar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/// /dummy data
const GageDummyData = [
  {
    movieName: 'housefire', thumbsUp: 300, thumbsDown: 30, _id: 1,
  },
  {
    movieName: 'housefloods', thumbsUp: 500, thumbsDown: 3, _id: 2,
  },
  {
    movieName: 'housestorm', thumbsUp: 1, thumbsDown: 0, _id: 3,
  },
];
/// /

class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      // will referent the list of videos
      movies: [],
      list: GageDummyData,
    };
  }

  // will get the list of videos from the api and then give that value to the state video key
  getMoviesData() {
    axios.get('/findMovies')
      .then(({data}) => {
        if (data) {
          this.setState({
            movies: data,
          });
          console.log('successful get');
        } else {
          console.log('unsuccessful get');
        }
      })
      .catch((err) => {
        console.log('ERROR was unable to get video data:  ', err);
      });
  }

  // // onclick add to like or dislike
  thump(opinion, value, id) {
    if (opinion === 'likes') {
      axios.put(`/Movie/UpdateThumbs/${id}`, {
        thumbsUp: value + 1,
      })
        .then((data) => {
          if (data) {
            console.log('successful put');
          } else {
            console.log('unsuccessful put');
          }
        })
        .catch((err) => {
          console.log('ERROR was unable to get video data:  ', err);
        });
    } else if (opinion === 'dislikes') {
      axios.put(`/${id}`, {
        thumbsDown: value + 1,
      })
        .then((data) => {
          if (data) {
            console.log('successful put');
          } else {
            console.log('unsuccessful put');
          }
        })
        .catch((err) => {
          console.log('ERROR was unable to get video data:  ', err);
        });
    }
  }

  componentDidMount() {
    this.getMoviesData()
    console.log(this.state.movies)
  }

//() => this.thump('like', data.thumbsUp, data.id)
//() => this.thump('dislike', data.thumbsDown, data.id)
  render() {
    const { movies } = this.state;
    // this.thumbs('likes', data.likes, data._id)
    // this.thumbs('dislikes', data.dislikes, data._id)

    return (
      <div className="box">
        {movies.map((data) => (
          <div key={data._id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                    <Toolbar variant="dense">
                      <button onClick={() => this.thump('like', data.thumbsUp, data.id)}><ThumbUpOffAltIcon /></button>
                      <div className="likebutton">{data.thumbsUp}</div>
                      <button onClick={()=>console.log('dislike')}><ThumbDownOffAltIcon /></button>
                      <div className="dislikebutton">{data.thumbsDown}</div>
                    </Toolbar>
                  </AppBar>
                </Box>
              </CardContent>
            </Card>
          </div>
        ))}

      </div>
    );
  }
}

export default Video;
