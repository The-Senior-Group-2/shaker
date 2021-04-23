import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeView from './RecipeView';
import ToggleSwitch from './ToggleSwitch';
const RandomStyle = styled.div`
  background: inherit;
  color: ghostwhite;
  display: flex;
  flex-flow: column;
  padding-left: 22%;
  padding-bottom: 100%;
  padding-top: 10%;
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
  // 10
  const [tenRandom, setTenRandom] = useState([]);
  const [ switched, setSwitched ] = useState(false);
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
  // get 10 random cocktails
  const fetchTenRandomDrinks = async () => {
    setIsLoaded(false);
    try {
      const result = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php');
      setIsLoaded(true);
      setTenRandom(result.data.drinks);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };
  useEffect(() => {
    const randomRec = fetchTenRandomDrinks();
    return () => {
      setRandomRecipe(randomRec);
    };
  }, []);
  const handleSwitch = (e) => {
    const { checked } = e.target;
    setSwitched(checked);
  };
  const tenMap = tenRandom.map((drinkObj, i) => {
    return (
      <RecipeView
        key={i}
        recipe={[drinkObj]}
        loaded={isLoaded}
        err={error}
      />
    );
  });
  useEffect(() => {
    const randomTen = fetchTenRandomDrinks();
    const randomRec = fetchRandomDrink();
    return () => {
      !switched ?
        setRandomRecipe(randomRec) :
        setTenRandom(randomTen);
    };
  }, []);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  const handleClick = () => {
    try {
      !switched ?
        fetchRandomDrink() :
        fetchTenRandomDrinks();
    } catch (error) {
      setError(error);
    }
  };
  return (
    <RandomStyle>
      <div>
        <div>
          <div
            style={{
              paddingLeft: '3%',
              paddingBottom: '2%'
            }}
          >
            <ToggleSwitch
              label='x10'
              handler={handleSwitch}
            />
          </div>
          <button
            onClick={handleClick}
            className='random-btn'
          >
            SHAKE!
          </button>
          {
            error ?
              <div>Error: {error.message}</div> :
              !isLoaded ?
                <div style={{fontSize: '20px', marginLeft: '25%'}}>Loading...</div> :
                !switched ?
                  <RecipeView
                    recipe={randomRecipe}
                    loaded={isLoaded}
                    err={error}
                  /> :
                  <div>{tenMap}</div>
          }
        </div>
      </div>
    </RandomStyle>
  );
};
export default Random;
