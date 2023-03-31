/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { styled } from '@mui/system';

function WatchList(props) {
  const {
    userObject, keyCode, buttonClicked, userName,
  } = props;
  const [movieList, setMovieList] = useState(userObject.movieList || {});
  const [checked, setChecked] = React.useState([1]);

  const LargeListItemText = styled(ListItemText)(({ theme }) => ({
    '.MuiListItemText-primary': {
      fontSize: theme.typography.pxToRem(18),
    },
  }));

  // render when button clicked
  useEffect(() => {
    if (userObject && userObject.movieList) {
      setMovieList(userObject.movieList);
    }
  }, [userObject, buttonClicked]);
  useEffect(() => {
    if (userObject && userObject.movieList) {
      setMovieList(userObject.movieList);
    }
  }, [buttonClicked]);

  // when box is checked change value
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // when items are deleted update watchlist on db

  const deleteFromWatchList = (list) => {
    const body = {
      userName,
      movieList: list,
    };
    console.log(body);
    axios.post('/UserObject', body);
  };

  // when deleted is pushed delete from in state movielist
  const handleDeleteSelected = () => {
    // Update the movieList and remove the selected movies
    const updatedMovieList = {
      ...movieList,
      [keyCode]: movieList[keyCode].filter((_, index) => !checked.includes(index)),
    };

    // Update the movieList
    setMovieList(updatedMovieList);
    userObject.movieList = updatedMovieList;
    // Reset the checked state
    setChecked([]);
    // delete from DB
    deleteFromWatchList(updatedMovieList);
  };

  // open new window and play netflix

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const playOnNetflix = ((id) => openInNewTab(`https://www.netflix.com/title/${id}`));

  if (movieList[keyCode] && Array.isArray(movieList[keyCode]) && movieList[keyCode].length > 0) {
    return (
      <List
        dense
        sx={{
          width: '100%', minWidth: 500, bgcolor: 'background.paper',
        }}
      >
        <ListItem>
          <Chip
            icon={<PlayCircleFilledIcon style={{ fontSize: 30 }} />}
            label="Click On Name To Play On Netflix"
            variant="outlined"
            style={{ fontSize: 20 }}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteSelected}
            sx={{
              ml: 5,
            }}
          >
            Delete Checked Items
          </Button>

        </ListItem>
        {movieList[keyCode].map((movie, value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={(
                <Checkbox
                  edge="end"
                  onChange={handleToggle(value)}
                  checked={checked.indexOf(value) !== -1}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              )}
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value + 1}`}
                    src={movie.image}
                    sx={{
                      width: 55,
                      height: 55,
                      mr: 5,
                    }}
                  />
                </ListItemAvatar>
                <LargeListItemText
                  id={labelId}
                  primary={movie.name}
                  onClick={() => playOnNetflix(movie.trailer.netflix_id)}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return null;
}

export default WatchList;
