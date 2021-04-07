// import React, { useState } from 'react';
import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';


const MultiSearch = (props) => {
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
  console.info(params);
  // const multiItemSearch = async () => {
  //   const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${params}`);
  //   console.info(result);

  //   // ?? (result.data.drinks); ?? //
  // };

  // console.info('ingredientsList:', ingredientsList, 'searchParams:', searchParams, 'finalParams:', finalParams());
  return (
    <div>
      <button>Search</button>
    </div>
  );
};

MultiSearch.propTypes = {
  ingredientsList: PropTypes.array.isRequired,
};


export default MultiSearch;
