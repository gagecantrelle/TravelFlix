import React, { useState, useEffect } from 'react';

function WatchList(props) {
  const [movieList, setMovieList] = useState([]);
  const { userObject, keyCode } = props;

  useEffect(() => {
    if (userObject && userObject.movieList) {
      setMovieList(userObject.movieList);
    }
  }, [userObject]);

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
