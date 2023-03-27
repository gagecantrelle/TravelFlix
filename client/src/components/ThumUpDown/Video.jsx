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
    movieName: 'housefire', thumbsUp: 300, thumbsDown: 30, _id: 1
  },
  {
    movieName: 'housefloods', thumbsUp: 500, thumbsDown: 3, _id: 2
  },
  {
    movieName: 'housestorm', thumbsUp: 1, thumbsDown: 0, _id: 3
  },
];
/// /

class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      // will resprent the list of videos
      videos: GageDummyData,
    };
  }

  // will get the list of videos from the api and then give that value to the state video key
  getVideosData() {
    axios.get('/')
      .then((data) => {
        if (data) {
          this.setState({
            videos: data,
          });
          console.log('sucessfull get');
        } else {
          console.log('unsucessfull get');
        }
      })
      .catch((err) => {
        console.log('ERROR was unable to get video data:  ', err);
      });
  }

  // onclick add to like or dislike
  thums(opition, value, id) {
    if (opition === 'likes') {
      axios.put(`/${id}`, {
        thumbsUp: value + 1,
      })
        .then((data) => {
          if (data) {
            console.log('sucessfull put');
          } else {
            console.log('unsucessfull put');
          }
        })
        .catch((err) => {
          console.log('ERROR was unable to get video data:  ', err);
        });
    } else if (opition === 'dislikes') {
      axios.put(`/${id}`, {
        thumbsDown: value + 1,
      })
        .then((data) => {
          if (data) {
            console.log('sucessfull put');
          } else {
            console.log('unsucessfull put');
          }
        })
        .catch((err) => {
          console.log('ERROR was unable to get video data:  ', err);
        });
    }
  }

  render() {
    const { videos } = this.state;
    // this.thums('likes', data.likes, data._id)
    // this.thums('dislikes', data.dislikes, data._id)

    return (
      <div className="box">
        {videos.map((data) => (
          <div key={data._id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                  <AppBar position="static">
                    <Toolbar variant="dense">
                      <button onClick={() => this.thums('like', data.thumbsUp, data._id)}><ThumbUpOffAltIcon /></button>
                      <div className="likebutton">{data.thumbsUp}</div>
                      <button onClick={() => this.thums('dislike', data.thumbsDown, data._id)}><ThumbDownOffAltIcon /></button>
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
