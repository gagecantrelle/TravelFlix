const { Sequelize } = require('sequelize');

const mysql2 = require('mysql2/promise');

const database = 'travel';
let sequelize;
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
  } catch (error) {
    console.log('dbFailed:', error);
  }
}

init();
module.exports.sequelize = sequelize;
