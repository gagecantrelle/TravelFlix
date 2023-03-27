/* eslint-disable no-unused-vars */
const { Sequelize, Model, DataTypes } = require('sequelize');

const mysql2 = require('mysql2/promise');

const database = 'travel';
let sequelize;
let User;
let Movie;
async function createDatabaseIfNotExists() {
  const connection = await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
  await connection.end();
}
async function init() {
  try {
    await createDatabaseIfNotExists();
    sequelize = new Sequelize('travel', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
    });

    await sequelize.authenticate().then(() => {
      console.log('connected');
    });
    // creates user Model
    User = sequelize.define('User', {
      userName: { type: DataTypes.STRING },
      refreshToken: { type: DataTypes.STRING },
      authToken: { type: DataTypes.STRING },
      comments: { type: DataTypes.STRING },
      userImage: { type: DataTypes.STRING },
      locationsTraveled: { type: DataTypes.STRING },
      movieList: { type: DataTypes.STRING },
      homeCountry: { type: DataTypes.STRING },
    });
    // makes sure the User Schema matches the one we just created in DB
    await User.sync();
    // create movie model
    Movie = sequelize.define('Movie', {
      movieName: DataTypes.STRING,
      thumbsUp: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      thumbsDown: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },

    });
    await Movie.sync();
  } catch (error) {
    console.log('dbFailed:', error);
  }
  return { User, Sequelize, Movie };
}

// init();

module.exports.initDb = init;
