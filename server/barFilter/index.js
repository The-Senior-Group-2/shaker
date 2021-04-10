const { Recipe } = require('../database/index');
const { recipeById, drinksByIngredient, getIngredients } = require('../api/index');
const { Ingredient } = require('../database/index');

const possibleRecipes = (ingredients) => {
  ingredients.forEach(ing => {
    drinksByIngredient(ing)
      .then(response => response.data.drinks.forEach(drink => {
        recipeById(drink.idDrink)
          .then(res => addRecipeTodb(res.data.drinks[0])).catch(err => { throw err; });
      })).catch(err => { throw err; });
  });
};

const createRecipe = (recipe) => {
  const ingArr = [];
  for (let i = 1; i <= 15; i++) {
    const ing = [];
    if (recipe[`strIngredient${i}`]) {

      ing.push(recipe[`strIngredient${i}`]);

      if (recipe[`strMeasure${i}`]) {
        ing.push(recipe[`strMeasure${i}`]);
      } else {
        ing.push(' ');
      }

      ingArr.push(ing);
    }
  }

  return {
    recId: recipe.idDrink,
    name: recipe.strDrink,
    category: recipe.strCategory,
    glass: recipe.strGlass,
    instruction: recipe.strInstructions,
    img: recipe.strDrinkThumb,
    ingredients: JSON.stringify(ingArr)
  };
};

const addRecipeTodb = (recipe) => {
  Recipe.findOne({ where: {name: recipe.strDrink}}).then(data => {
    if (!data) {
      Recipe.create(createRecipe(recipe)).catch(err => { throw err; });
    }
  });
};

const addIngredientsToDb = () => {
  getIngredients()
    .then(res => res.data.drinks.forEach(ing => {
      Ingredient.create({ ingredient: ing.strIngredient1}).catch(err => { throw err; });
    }));
};

//possibleRecipes(['Lemon', 'Gin', 'Lime', 'Grenadine']);

module.exports = {
  possibleRecipes,
  createRecipe,
  addRecipeTodb,
  addIngredientsToDb
};
