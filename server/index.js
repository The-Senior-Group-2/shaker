const { default: axios } = require('axios');
const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const clientPath = path.resolve(__dirname, '../client/dist');
const { Ingredient, User, Recipe } = require('./database/index');
const { getIngredients } = require('./api/index');

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

app.get('/bar', (req, res) => {

});

app.listen(PORT);
