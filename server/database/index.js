const { Sequelize } = require('sequelize');
//const config = require('config.json');
const mysql2 = require('mysql2/promise');
//module.exports = db = {};

// initialize();

// async function initialize() {
//     // create db if it doesn't already exist
//     // const { host, port, travel, password, database } = config.database;
//     const connection = await mysql.createConnection({ host, port, travel, });
//     await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

//     // connect to db
//     const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

//     // init models and add them to the exported db object
//     //db.User = require('../users/user.model')(sequelize);

//     // sync all models with database
//     await sequelize.sync();
// }

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
//const host = 'localhost'
const port = 3306
const database = 'travel'
const travel = 'travel'
let sequelize
// async function init(){
//     // const connection = await mysql.createConnection({ localhost, port, travel});
//     // await connection.query(`CREATE DATABASE IF NOT EXISTS \ ${database}\;`);
 
//   sequelize = new Sequelize('travel', 'root',  {
//   host: 'localhost',
//   dialect: 'mysql'

// });
//  await sequelize.authenticate().then(()=>{console.log("connected")});
// }
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
  
init()
module.exports.sequelize = sequelize