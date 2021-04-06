// import React from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const Recipes = (props) => {
  const [ recipe, setRecipe ] = useState({
    idDrink: 0,
    strDrink: '',
    strIngredients: ''
  });

  const { drinks } = props;

  Recipes.propTypes = {
    drinks: PropTypes.object
  };

  const handleRecipeChange = async () => {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinks.idDrink}`);
    const tempObj = { idDrink: result.data.idDrink, strDrink: result.data.strDrink, strIngredient: result.data.strIngredients };
    setRecipe(tempObj);
  };

  const renderRecipe = () => {
    recipe.idDrink < 0 ?
      null :
      handleRecipeChange();
    // return props.drinks.map(drink => {
    //   return (
    //     <div
    //       key={drink.idDrink}
    //     >

    //     </div>
    //   );
    // });
  };


  return (
    <div
      key={recipe.idDrink}
      name='strIngredient1'
    >
      <h2>Recipes Component</h2>
      <label>
        Ingredients:
        <p>{}</p>
        <button onClick={renderRecipe}></button>
      </label>
    </div>
  );
};







export default Recipes;
