const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('shaker', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,

});

const Ingredient = sequelize.define('Ingredient', {
  ingredient: DataTypes.STRING
});

const Recipe = sequelize.define('Recipe', {
  name: DataTypes.STRING,
  recipe: DataTypes.STRING
});

Ingredient.sync();
Recipe.sync();
User.sync();

module.exports = {
  Ingredient,
  User,
  Recipe
};



