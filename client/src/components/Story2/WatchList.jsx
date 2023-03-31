/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

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

  // open new window and play netflix

  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const playOnNetflix = ((id) => openInNewTab(`https://www.netflix.com/title/${id}`));

  if (movieList[keyCode] && Array.isArray(movieList[keyCode]) && movieList[keyCode].length > 0) {
    return (
      <div>
        <h4>Click To Watch</h4>
        <ul>
          {movieList[keyCode].map((movie, i) => (
            <li
              key={i}
              onClick={() => playOnNetflix(movie.trailer.netflix_id)}
            >
              {movie.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default WatchList;
