//const axios = require('axios');
const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const clientPath = path.resolve(__dirname, '../client/dist');
const { Ingredient } = require('./database/index');
const { getIngredients } = require('./api/index');
const { possibleRecipes } = require('./barFilter/index');

const app = express();

const PORT = 8080;
app.use(express.json());
app.use(urlencoded({extended: true}));

app.use('/', express.static(clientPath));

app.use('/', (req, res) => {
  Ingredient.findAll().
    then(data => {
      if (!data) {
        getIngredients()
          .then(response => {
            response.data.forEach(ing => Ingredient.create( {ingredient: ing.strIngredient1}));
          });
      }
      res.sendStatus(201);
    });
});

app.get('/sip', (req, res) => {
  const { ingredients } = req.body;
  possibleRecipes(ingredients).then(() => res.sendStatus(201));
});

app.listen(PORT, () => {
  console.info(`started on port: http://127.0.0.1:${PORT}`);
});

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
