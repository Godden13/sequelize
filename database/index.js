const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('drinks2_db', 'root', undefined, {
  host: 'localhost',
  dialect: 'mysql',
} )

module.exports = sequelize;











// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'drinks_db',
//   password: 'undefined'
// })


// module.exports = connection.promise();