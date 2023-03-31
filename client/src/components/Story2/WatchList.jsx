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

function WatchList(props) {
  const { userObject, keyCode, buttonClicked } = props;
  const [movieList, setMovieList] = useState(userObject.movieList || {});

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

  const [checked, setChecked] = React.useState([1]);

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
  const handleDeleteSelected = () => {
    // Update the movieList and remove the selected movies
    const updatedMovieList = {
      ...movieList,
      [keyCode]: movieList[keyCode].filter((_, index) => !checked.includes(index)),
    };

    // Update the movieList
    setMovieList(updatedMovieList);

    // Reset the checked state
    setChecked([]);
  };

  // open new window and play netflix

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const playOnNetflix = ((id) => openInNewTab(`https://www.netflix.com/title/${id}`));

  if (movieList[keyCode] && Array.isArray(movieList[keyCode]) && movieList[keyCode].length > 0) {
    return (
      <List dense sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
        <ListItem>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDeleteSelected}
          >
            Delete Selected
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
                  />
                </ListItemAvatar>
                <ListItemText
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
