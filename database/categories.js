const { DataTypes } = require("sequelize");
const sequelize = require('.');

const Categories = sequelize.define("categories", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING
},
  {
    timestamps: true,
    paranoid: true
  }
)

module.exports = Categories;
