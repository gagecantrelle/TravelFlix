require('dotenv').config();

const { YOUTUBE_KEY } = process.env;
const { UNOGD_KEY } = process.env;
console.log(UNOGD_KEY + "hi")
module.exports = {
  YOUTUBE_KEY, UNOGD_KEY,
};
