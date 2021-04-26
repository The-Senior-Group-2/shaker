//const axios = require('axios');
const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const { Ingredient } = require('./database/index');
const { getIngredients } = require('./api/index');
const { possibleRecipes } = require('./barFilter/index');
const { Bar } = require('./database/index');
const { filterRecipes } = require('./barFilter/index');

//const bodyParser = require('body-parser');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport-setup');


app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieSession({
  name: 'tuto-session',
  keys: ['key1', 'key2']
}));

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(urlencoded({extended: true}));

app.get('/sip', (req, res) => {
  Bar.findAll().then((data) => {
    const ingArr = [];
    data.forEach(ing => {
      ingArr.push(ing.name);
      const drinks = filterRecipes(possibleRecipes(ingArr));
      res.status(200).send(drinks);
    });
  }).catch(() => res.send(500));
});




app.get('/none', (req, res) => res.send('You logged out!'));

// Example protected and unprotected routes
app.get('/failed', (req, res) => res.send('You Failed to log in!'));

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`));

// Auth Routes
app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/good');
  }
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/none');
});

const clientPath = path.resolve(__dirname, '../client/dist');


//const app = express();

app.post('/bar', (req, res) => {
  Bar.findOne(({name: req.body.ingredient})
    .then(data => {
      if (!data) {
        Bar.create({ name: req.body.ingredient});
        console.info(res);
      }
    })
  );
});

const PORT = 8080;
// app.use(express.json());
// app.use(urlencoded({extended: true}));

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

app.listen(PORT, () => {
  console.info(`started on port: http://localhost:${PORT}`);
});

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});




