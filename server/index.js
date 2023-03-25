const path = require('path');
// const dotenv = require('dotenv');
const express = require('express');
const sequelize = require('./database')
const { Sequelize } = require('sequelize');
// dotenv.config({
//   path: path.resolve(__dirname, '../.env'),
// });

const app = express();
const CLIENT_PATH = path.resolve(__dirname, '../client/dist');
app.use(express.static(CLIENT_PATH));

const PORT = 8085;

//  sequelize.authenticate().then(()=>{console.log("connected")});
app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});

app.get('/', (req, res)=>{
  console.log('here');
  res.send();
});
