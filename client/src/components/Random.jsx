import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import RecipeView from './RecipeView';

const RandomStyle = styled.div`
  background: inherit;
  color: ghostwhite;
  display: flex;
  flex-flow: column;
  padding: 8%;
  width: 1100px;
  height: 100%;
  button, input{
    background: rgb(35, 35, 35);
    color: ghostwhite;
    font-size: 19px;
    width: fit-content;
    padding: 2rem 3rem;
    border: none;
    outline: none;
    border-radius: 65%;
    box-shadow: -1px -1px 2px rgba(100,100,100, 1), 1px 1px 1px rgba(0,0,0, 1);
    :active{
      box-shadow: -1px -1px 1px rgba(100,100,100, 1), 1px 1px 1px rgba(0,0,0, 1);
      background: rgb(25, 25, 25);
    }
    :hover{
      box-shadow: -2px -2px 6px rgba(100,100,100, 1), 3px 3px 4px rgba(0,0,0, 1);
    }
  };
  h2{
    color: cornflowerblue;
    padding-left: 4%;
  };
`;

const Random = () => {
  const [ isLoaded, setIsLoaded ] = useState(true);
  const [ error, setError ] = useState('');
  const [ randomRecipe, setRandomRecipe ] = useState([]);


  const fetchRandomDrink = async () => {
    setIsLoaded(false);
    try {
      const result = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php');
      setIsLoaded(true);
      setRandomRecipe(result.data.drinks);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    const randomRec = fetchRandomDrink();
    return () => {
      setRandomRecipe(randomRec);
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleClick = () => {
    try {
      fetchRandomDrink();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <RandomStyle>
      <div>
        <button
          onClick={handleClick}
          className='random-btn'
        >
          {/* This is SoOo Random! */}
          SHAKE!
        </button>
        {
          error ?
            <div>Error: {error.message}</div> :
            !isLoaded ?
              <div style={{fontSize: '20px'}}>Loading...</div> :
              <RecipeView
                recipe={randomRecipe}
                loaded={isLoaded}
                err={error}
              />
        }
      </div>
    </RandomStyle>
  );
};

export default Random;
