// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';


const MultiSearch = (props) => {
  const { ingredientsList } = props;
  const searchParams = ingredientsList;
  const searchParamsManipulation = searchParams.filter(param => {
    return param !== undefined;
  })
    .map(() => {

    });
  console.info(searchParamsManipulation);
  return (
    <div>
      <h4>Search for recipes that use these ingredients:</h4>
      <button>Search</button>
      <p>
        {ingredientsList}
      </p>
    </div>
  );
};

MultiSearch.propTypes = {
  ingredientsList: PropTypes.array.isRequired,
};


export default MultiSearch;
