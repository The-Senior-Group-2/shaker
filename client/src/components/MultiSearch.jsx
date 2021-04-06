// import React, { useState } from 'react';
import React from 'react';


const MultiSearch = (props) => {
  const item = props;

  return (
    <div>
      <h4>Search for recipes that use these ingredients:</h4>
      <button>Search</button>
      <p ingredientsList={item.ingredientsList}>
        {item.ingredientsList}
      </p>
    </div>
  );
};






export default MultiSearch;
