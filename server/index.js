const path = require('path');

const express = require('express');

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
// Recieves request for unique netflix programs
app.get('/findUnique', (req, res) => {
  console.log(req.query);
  res.send();
});

//  sequelize.authenticate().then(()=>{console.log("connected")});
app.listen(PORT, () => {
  console.log(`Server listening on :${PORT}`);
});
