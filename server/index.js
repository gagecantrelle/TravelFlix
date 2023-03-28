/* eslint-disable no-return-assign */
const path = require('path');
const express = require('express');
const { getTop100By, youtubeSearch } = require('./Api/api');
require('dotenv').config();

const { initDb } = require('./database');

const app = express();
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
app.use(express.static(CLIENT_PATH));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 8070;

app.get('/', (req, res) => {
  // console.log('here');
  res.send();
});
// Receives request for unique netflix programs
// makes call to api for each country, returns data to
// server which then uses unique array  to manipulate and then returns
// manipulated data back to client
app.get('/findUnique', async (req, res) => {
  const { origin, destination } = req.query;
  let originArr;
  let destinationArr;

  await getTop100By(origin)
    .then((data) => originArr = data.results)
    .catch((error) => console.error(error));

  await getTop100By(destination)
    .then((data) => destinationArr = data.results)
    .catch((error) => console.error(error));

  // this code takes the destination array and the origin array and returns
  // a newArray of unique items .filter uses the .some method, this looks at
  // the array and returns true if there is a matching value anywhere on the
  // array  however because the bang operator is used filter will remove
  // what doesn't come back true
  const uniqueArray1 = destinationArr
  // eslint-disable-next-line max-len
    .filter((country1) => !originArr.some((country2) => country1.netflix_id === country2.netflix_id));
  // returns the new unique array to client
  res.send(uniqueArray1);
});

app.post('/search', (req, res) => {
  console.log(req.body);
  youtubeSearch(req.body.title).then((data) => {
    const videoIds = data.items.map((item) => item.id.videoId);
    console.log(videoIds);
    res.send(videoIds[0]);
  });
});
//
// needed to add this because without it was trying to create
// a new instance without having defined the model
(async () => {
  // Initialize the database and get the User/Movie model
  const { User, Movie } = await initDb();
  // handles put request to add movies to watch list (in progress)
  app.put('/addToWatchList', (req, res) => {

  });

  app.get('/userObject', (req, res) => {
    const { userName } = req.query;
    User.findOne({ where: { userName } })
      .then((data) => res.send(data))
      .catch((error) => {
        console.error('Error in UserObject');
        res.send(error);
      });
  });

  // Use the User model in your app.post('/User') route to create new
  // user
  app.post('/User', async (req, res) => {
    const { userName } = req.body;
    await User.create({ userName })
      .then((data) => res.send(data))
      .catch((error) => res.send(error));
  });
  // Put movie app.? here
})();

app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
