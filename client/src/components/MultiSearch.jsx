import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


const MultiSearch = (props) => {
  const [ recipeSearchResults, setRecipeSearchResults ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(true);
  const [ error, setError ] = useState(null);

  const { ingredientsList } = props;
  const searchParams = [...ingredientsList];

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
    setIsLoaded(false);
    try {
      const results = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${params}`);
      setRecipeSearchResults(results.data.drinks);
      setIsLoaded(true);
    } catch (error) {
      if (error) {
        setError(error);
        setIsLoaded(true);
      }
    }
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
            width: '100%',
            height: 'auto'
          }}
        />
        <a
          style={{
            color: '#54e5ea',
            paddingLeft: '7%',
            fontSize: '28px',
            alignContent: 'center'
          }}
          href={`https://www.thecocktaildb.com/drink/${drink.idDrink}-${drink.strDrink}`}
          rel='noreferrer'
          target='_blank'
        >{drink.strDrink}</a>
      </div>
    );
  });

  const handleClick = () => {
    try {
      handleMultiItemSearch();
    } catch (error) {
      if (error) {
        setError(error);
      }
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
        {
          error ?
            <div>Error: {error.message}</div> :
            !isLoaded ?
              <h1 style={{fontSize: '20px'}}>Loading...</h1> :
              <div>{drinkMap}</div>
        }
      </div>
    </div>
  );
};

MultiSearch.propTypes = {
  ingredientsList: PropTypes.array.isRequired,
};


export default MultiSearch;
