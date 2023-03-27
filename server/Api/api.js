const axios = require('axios');
const { YOUTUBE_KEY, UNOGD_KEY } = require('../config');

// axios request to UNOGS API, origin and destination by NetFlix countryID
const getTop100By = (countryID) => {
  const options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/search/titles',
    params: {
      country_list: `${countryID}`,
      order_by: 'rating',
      limit: '100',
      country_andorunique: 'or',
    },
    headers: {
      'X-RapidAPI-Key': '',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
    },
  };

  return axios.request(options).then((response) => response.data).catch((error) => {
    console.error(error);
  });
};
// zachs function
// searches youtube and gets three results
const youtubeSearch = (title) => {
  const options = {
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      key: 'AIzaSyAUtFK82kru3O2T-c1KuVhIofmOq41q3fM',
      //  key: YOUTUBE_KEY,
      // q: 'dog',
      q: title,
      // part: 'snippet',
      type: 'video',
      maxResults: 3,
    },
  };

  return axios.request(options)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

module.exports.youtubeSearch = youtubeSearch;
module.exports.getTop100By = getTop100By;
