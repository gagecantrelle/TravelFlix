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
      'X-RapidAPI-Key': '253ff4744dmsh976b774f3e48267p189808jsnfd316ee46cf2',
      'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com',
    },
  };

  return axios.request(options).then((response) => response.data).catch((error) => {
    console.error(error);
  });
};

module.exports.getTop100By = getTop100By;
