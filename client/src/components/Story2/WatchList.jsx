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

  if (movieList[keyCode] && Array.isArray(movieList[keyCode]) && movieList[keyCode].length > 0) {
    return (
      <ul>
        {movieList[keyCode].map((movie, i) => (
          <li key={i}>
            {movie}
          </li>
        ))}
      </ul>
    );
  }

  return null;
}

export default WatchList;
