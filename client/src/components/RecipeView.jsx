import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


// Styling
const RecipeStyle = styled.div`
  background: inherit;
  color: ghostwhite;
  display: flex;
  flex-flow: column;
  padding: 8%;
  width: 1100px;
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

const RecipeIngredientsStyle = styled.div`
  th{
    vertical-align: top;
    border: 1px solid ghostwhite;
    align-items: normal;
    display: flex;
    align-items: top;
    justify-content: center;
    max-width: 100%;
    padding: 2rem 2rem;
  };
`;
// END OF STYLING



// I ran out of time to refactor this component into functioning dynamically,
// hence the absurd file length. So...to whoever has to code here next... my bad.
const RecipeView = (props) => {
  const [ recipeToRender, setRecipeToRender ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(true);
  const [ error, setError ] = useState('');

  const { recipe, loaded, err } = props;

  // sets the states to the value of the props when the component initially mounts
  useEffect(() => {
    return () => {
      setRecipeToRender(recipe);
    };
  }, [recipe]);

  useEffect(() => {
    return () => {
      setIsLoaded(loaded);
    };
  }, [loaded]);

  useEffect(() => {
    return () => {
      setError(loaded);
    };
  }, [err]);




  // map out the recipe array
  const recipeMap = recipeToRender.map(drink => {
    return (
      <RecipeStyle key={drink.idDrink} style={{ border: '2px solid ghostwhite', margin: '5%', alignItems: 'center' }}>
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ width: '35%' }}>
                <h2>{drink.strDrink}</h2>
              </td>
              <td
                style={{
                  width: '65%',
                  justifyContent: 'center'
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
                <table style={{ width: '100%' }}>
                  <tbody>
                    <RecipeIngredientsStyle>
                      <tr>
                        <td>
                          <th>{drink.strIngredient1}</th>
                        </td>
                        <td>
                          {
                            drink.strIngredient2 ?
                              <th>{drink.strIngredient2}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient3 ?
                              <th>{drink.strIngredient3}</th> :
                              null
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {
                            drink.strIngredient4 ?
                              <th>{drink.strIngredient4}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient5 ?
                              <th>{drink.strIngredient5}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient6 ?
                              <th>{drink.strIngredient6}</th> :
                              null
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {
                            drink.strIngredient7 ?
                              <th>{drink.strIngredient7}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient8 ?
                              <th>{drink.strIngredient8}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient9 ?
                              <th>{drink.strIngredient9}</th> :
                              null
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {
                            drink.strIngredient10 ?
                              <th>{drink.strIngredient10}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient11 ?
                              <th>{drink.strIngredient11}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient12 ?
                              <th>{drink.strIngredient12}</th> :
                              null
                          }
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {
                            drink.strIngredient13 ?
                              <th>{drink.strIngredient13}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient14 ?
                              <th>{drink.strIngredient14}</th> :
                              null
                          }
                        </td>
                        <td>
                          {
                            drink.strIngredient15 ?
                              <th>{drink.strIngredient15}</th> :
                              null
                          }
                        </td>
                      </tr>
                    </RecipeIngredientsStyle>
                    <tr></tr>
                  </tbody>
                </table><br />
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            paddingLeft: '3%',
            paddingBelow: '4%'
          }}
        >
          <div style={{paddingLeft: '3%', paddingBelow: '4%'}}>
            <h2>Instructions</h2>
            <p style={{ paddingBottom: '3%' }}>
              {drink.strInstructions}
            </p>
          </div>
        </div>
      </RecipeStyle>
    );
  });

  return (
    <div>
      {
        error ?
          <div>Error: {error.message}</div> :
          !isLoaded ?
            <div style={{fontSize: '20px'}}>Loading...</div> :
            <div>{recipeMap}</div>
      }
    </div>
  );
};

RecipeView.propTypes = {
  recipe: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  err: PropTypes.string.isRequired
};

export default RecipeView;
