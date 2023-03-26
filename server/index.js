const path = require('path');
const express = require('express');
const { getTop100By } = require('./Api/api');

const app = express();
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
app.use(express.static(CLIENT_PATH));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 8085;

app.get('/', (req, res) => {
  console.log('here');
  res.send();
});
// Receives request for unique netflix programs
// makes call to api for each country, returns data to
// server which then uses ServerFunc to manipulate and then returns manipulated data back to client
app.get('/findUnique', (req, res) => {
  const { origin, destination } = req.query;
  console.log(origin);
  res.send();
});

//  sequelize.authenticate().then(()=>{console.log("connected")});
app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
