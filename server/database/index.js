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
  recId: DataTypes.STRING,
  name: DataTypes.STRING,
  category: DataTypes.STRING,
  glass: DataTypes.STRING,
  instruction: DataTypes.STRING(2000),
  img: DataTypes.STRING,
  ingredients: DataTypes.STRING
});

Ingredient.sync();
Recipe.sync();
User.sync();

Ingredient.belongsToMany(Recipe, { through: 'RecipeIngredients' });
Recipe.belongsToMany(Ingredient, { through: 'RecipeIngredients' });

module.exports = {
  Ingredient,
  User,
  Recipe
};
