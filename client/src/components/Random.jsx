// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const RandomStyle = styled.div`
  background: inherit;
  color: ghostwhite;
  display: flex;
  flex-flow: column;
  padding: 20%;
  width: 1100px;
  button, input{
    background: rgb(35, 35, 35);
    color: ghostwhite;
    font-size: 14px;
    width: fit-content;
    padding: 0.25rem 0.75rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
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
    color: cornflowerblue
  };
  td:ingredientTD{
    vertical-align: top;
    border: 1px solid ghostwhite;
    align-items: normal;
    padding-left: 5%;
  }
`;


const Random = () => {

  // const [ isClicked, setIsClicked ] = useState(false);
  const [ isLoaded, setIsLoaded ] = useState(true);
  const [ error, setError ] = useState(null);
  const [ randomRecipe, setRandomRecipe ] = useState([]);


  const fetchRandomDrink = async () => {
    setIsLoaded(false);
    try {
      const result = await axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/random.php');
      setIsLoaded(true);
      setRandomRecipe(result.data.drinks);
    } catch (error) {
      setError(error);
      setIsLoaded(true);
    }
  };

  // useEffect(() => {
  //   const randomRec = fetchRandomDrink();
  //   return () => {
  //     setRandomRecipe(randomRec);
  //   };
  // }, []);

  const handleClick = () => {
    try {
      fetchRandomDrink();
    } catch (error) {
      setError(error);
    }
  };

  const recipeInstructions = randomRecipe.map(drink => {
    const { strInstructions } = drink;
    const strArray = strInstructions.split('. ');
    console.info(strArray);
  });


  const randomRecipeMap = randomRecipe.map(drink => {
    return (
      <RandomStyle
        key={drink.idDrink}
      >
        <div
          // key={drink.idDrink}
          style={{
            border: '2px solid ghostwhite',
            margin: '5%',
            alignItems: 'center',
          }}
        >
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '35%' }}>
                  <h2>{drink.strDrink}</h2>
                </td>
                <td
                  style={{
                    width: '65%',
                    verticalAlign: 'top',
                    paddingLeft: '5%'
                  }}
                >
                  <h2>Ingredients</h2>
                </td>
              </tr>

              <tr>
                <td
                  style={{
                    width: '35%',
                    verticalAlign: 'top'
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
                </td>
                <td
                  style={{
                    width: '60%',
                    verticalAlign: 'top'
                  }}
                >
                  <table style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient1}</p>
                        </td>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient2}</p>
                        </td>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient3}</p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient4}</p>
                        </td>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient5}</p>
                        </td>
                        <td
                          className='ingredientTD'
                          // style={{
                          //   verticalAlign: 'top',
                          //   border: '1px solid ghostwhite',
                          //   alignItems: 'normal',
                          //   paddingLeft: '5%'
                          // }}
                        >
                          {/* <img src={add drink ingredient picture here}/> */}
                          <p>{drink.strIngredient6}</p>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </table><br />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: '5px'
            }}
          >
            <h2
              // style={{paddingLeft: '3%'}}
              // style={{
              //   display: 'flex',
              //   flexFlow: 'column',
              //   alignItems: 'center',
              //   justifyContent: 'center',
              // }}
            >Instructions</h2>
            {/* {drink.strInstructions} */}
            {
              recipeInstructions.map((step, i) => {
                return (
                  <div key={i}>

                  </div>
                );
              })
            }
          </div>
        </div>
      </RandomStyle>
    );
  });


  return (
    <RandomStyle>
      <div>
        <button
          onClick={handleClick}
          className='random-btn'
        >
          Shake!
        </button>
        {
          error ?
            <div>Error: {error.message}</div> :
            !isLoaded ?
              <div style={{fontSize: '40px'}}>Loading...</div> :
              <div>{randomRecipeMap}</div>
        }
      </div>
    </RandomStyle>
  );
};






export default Random;
