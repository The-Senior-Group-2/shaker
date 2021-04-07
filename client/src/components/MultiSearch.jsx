import React, { useState } from 'react';
// import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// import Recipe from './Recipe';


const MultiSearch = (props) => {
  const [ recipeSearchResults, setRecipeSearchResults ] = useState([]);
  // const [ recipeIsFav, setRecipeIsFav ] = useState(false);

  const { ingredientsList } = props;
  const searchParams = [...ingredientsList];

  // const [ recipes, setRecipes ] = useState();

  // finalParams will use a state prop from the Bar component to process
  // the data in order to pass it as the param(s) for the external API call.
  // First it checks the length of the props clone (an error is thrown if
  // reduce is called with undefined). Then it replaces any whitespace it
  // finds with an underscore. Finally it reduces the ingredients array
  // to a single string with no spaces, and commas between each item. This is
  // how the api expects us to pass multiple params.
  const finalParams = () => {
    if (searchParams.length !== 0) {
      const addUnderscore = searchParams.map(item => item.replace(/\s/g, '_') );
      const addCommas = addUnderscore.reduce((accItem, curItem) => accItem + ',' + curItem );
      return addCommas;
    }
  };
  const params = finalParams();

  const handleMultiItemSearch = async () => {
    const results = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${params}`);
    // const results = await axios.get();
    setRecipeSearchResults(results.data.drinks);
  };

  const drinkMap = recipeSearchResults.map((drink) => {
    return (
      <div
        key={drink.idDrink}
        style={{
          border: '2px solid ghostwhite',
          borderTop: '0px',
          margin: '5%',
          alignItems: 'center',
        }}
      >
        <img
          src={drink.strDrinkThumb}
          style={{
            display: 'block',
            border: '2px solid ghostwhite',
            borderLeft: '0px',
          }}
        />
        {/* CHANGE TO <a> TAG WITH APPROPRIATE HREF */}
        <a
          style={{
            color: '#54e5ea',
            paddingLeft: '7%',
            fontSize: '28px',
            alignContent: 'center'
          }}
          name={drink.strDrink}
          id={drink.idDrink}
          href={`https://www.thecocktaildb.com/drink/${drink.idDrink}-${drink.strDrink}`}
          // onClick={
          //   async () => {
          //     return await axios.get(`https://www.thecocktaildb.com/drink/${drink.idDrink}-${drink.strDrink}`);
          //   }
          // }
        >{drink.strDrink}</a>
      </div>
    );
  });

  const handleClick = () => {
    try {
      handleMultiItemSearch();
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <div>
      <button
        style={{
          marginTop: '1%',
        }}
        onClick={handleClick}
      >
        SIP!
      </button>
      <div>
        {drinkMap}
      </div>
    </div>
  );
};

MultiSearch.propTypes = {
  ingredientsList: PropTypes.array.isRequired,
};


export default MultiSearch;
