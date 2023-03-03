const { DataTypes } = require("sequelize");
const sequelize = require('.');
const Drink = require("./drinks");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  phone: DataTypes.STRING,
  apiKey: DataTypes.STRING,
  password: DataTypes.STRING
},
{
  timestamps: true,
  paranoid: true
}
)

module.exports = User;








// const connection = require(".");

// function getDrinksUsers(rows) {
//   const users = {};
//   const ids = new Set();
//   rows.forEach(({id, name, ...drink}) => {
//     if(users[id]) {
//       users[id].drinks.push(drink);
//     }else {
//       users[id] = { id, name, drinks:[drink]}
//     }
//   ids.add(id);
//   })
//   return Array.from(ids).map(id => users[id])
// }

// async function getAllUsers() {
//   const [result] = await connection.query("SELECT u.id, u.name, d.id AS drink_id, d.name AS drink_name FROM drinks AS d INNER JOIN users AS u ON d.user_id = u.id ORDER BY u.id;");
//   return getDrinksUsers(result);
// }

// async function findUserById(id) {
//   const [[user]] = await connection.query(`SELECT * FROM users WHERE id=?;`, [
//     id,
//   ]);
//   return user;
// }

// async function insertData(i) {
//   const [new_user] = await connection.query(
//     "INSERT INTO users(name, apiKey, description, email, phone_number, password) VALUE (?, ?, ?, ?, ?, ?);",
//     [i.name, i.apiKey, i.description, i.email, i.phone_number, i.password]
//   );
//   return findUserById(new_user.insertId);
// }

// async function updateData(j, id) {
//   const [user] = await connection.query(
//     "UPDATE users set name=?, apiKey=?, description=?, email=?, phone_number=?, password=? WHERE id=?;",
//     [j.name, j.apiKey, j.description, j.email, j.phone_number, j.password, id],
//   );
//   return user;
// }

// async function updateOneField(data, id) {
//   const values = []
//   const genString = Object.keys(data).map((key) => {
//     values.push(data[key])
//     return `${key} = ?`
//   }).join(', ')
//   const [user] = await connection.query(`UPDATE users SET ${genString} WHERE id=?`, [...values, id]);
//   return findUserById(id);
// }

// async function deleteData(id) {
//   const [user] = await connection.query(`DELETE FROM users WHERE id=?;`,[id]);
//   return ('Deleted');
// }

// module.exports = {
//   getAllUsers,
//   findUserById,
//   insertData,
//   updateData,
//   updateOneField,
//   deleteData,
// };
