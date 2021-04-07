const axios = require('axios').default;

const getIngredients = () => {
  const options = {
    method: 'GET',
    url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
    params: {i: 'list'},
    headers: {
      'x-rapidapi-key': '70cf5db794msh68d005415beb5c4p1b4cefjsn04b516b60f77',
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
    }
  };

  return axios.request(options);
};

module.exports = {
  getIngredients
};

console.log(getIngredients());
