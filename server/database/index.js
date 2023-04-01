/* eslint-disable no-unused-vars */
const { Sequelize, Model, DataTypes } = require('sequelize');

const mysql2 = require('mysql2/promise');

const database = 'travel';
let sequelize;
let User;
let Movie;
let UniqueArrays;
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
      userName: { type: DataTypes.STRING, unique: true },
      refreshToken: { type: DataTypes.STRING },
      authToken: { type: DataTypes.STRING },
      comments: { type: DataTypes.STRING },
      userImage: { type: DataTypes.STRING },
      locationsTraveled: { type: DataTypes.STRING },
      // movie list is where the "watch list" is stored
      // the keys on the object are the combined country codes of
      // the origin country and the destination. Each key has a value
      // of an array of movie "objects" that the user has put on
      // that unique watchlist
      movieList: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {},
      },
      homeCountry: { type: DataTypes.STRING },
    });
    // makes sure the User Schema matches the one we just created in DB
    await User.sync();

    // records new "keyCode" unique arrays should be deleted
    // periodically or create function that will run every
    // few weeks to check if new unique items exits
    UniqueArrays = sequelize.define('UniqueArrays', {
      keyCode: { type: DataTypes.STRING },
      uniqueArray: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
    });
    await UniqueArrays.sync();
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
  return {
    User, Sequelize, Movie, UniqueArrays,
  };
}

// init();

module.exports.initDb = init;
