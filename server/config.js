require('dotenv').config();


const { GOOGLE_CLIENT_ID } = process.env
const { GOOGLE_CLIENT_SECRET } = process.env
const { SESSION_SECRET } = process.env

const { YOUTUBE_KEY } = process.env;
const { UNOGD_KEY } = process.env;
console.log(UNOGD_KEY + "hi")
module.exports = {
  YOUTUBE_KEY, UNOGD_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SESSION_SECRET
};
