const Drink = require("./drinks");
const User = require("./users");
const Category = require("./categories");
const Ingredient = require("./ingredients");
const Glass = require("./glasses");
const sequelize = require(".");

function relate() {
  sequelize.sync()
  User.hasMany(Drink);
  Drink.belongsTo(User);

  Category.belongsToMany(Drink, { through: "drinks_categories" });
  Drink.belongsToMany(Category, {through : "drinks_categories"});

  Drink.belongsToMany(Ingredient, {through : "drinks_ingredients"});
  Ingredient.belongsToMany(Drink, {through: "drinks_ingredients"});

  Drink.belongsToMany(Glass, {through : "drinks_glasses"});
  Glass.belongsToMany(Drink, {through: "drinks_glasses"})

sequelize.sync()
}

module.exports = relate;