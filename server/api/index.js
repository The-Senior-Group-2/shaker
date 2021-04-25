const axios = require('axios').default;
//const { Ingredient } = require('../database/index');
const { API_KEY } = require('../config');

const getIngredients =  () => {
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
    params: {i: 'list'},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  return axios.request(options);
};

const drinksByIngredient =  (ingredient) => {
  const options = {
    method: 'GET',
    url: 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?',
    params: {i: `${ingredient}`},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  return axios.request(options);
};

const recipeById = (id) => {
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/lookup.php',
    params: {i: `${id}`},
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  return axios.request(options);
};

module.exports = {
  getIngredients,
  drinksByIngredient,
  recipeById
};


// drinksByIngredient('Gin').then(response => response.data.drinks.reduce((final, drink) => {
//   recipeById(drink.idDrink).then(res =>console.log(res.data));
//   return final;
// }, [])).catch(err => console.log(err));

