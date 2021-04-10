import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';



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



// RecipeView Component
const RecipeView = (props) => {
  const [ recipeToRender, setRecipeToRender ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(true);
  const [ error, setError ] = useState('');

  const { recipe, loaded, err } = props;
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


  const recipeMap = recipeToRender.map(drink => {
    return (
      <RecipeStyle
        key={drink.idDrink}
      >
        <div
          style={{
            border: '2px solid ghostwhite',
            margin: '5%',
            alignItems: 'center',
          }}
        >
          <table style={{width: '100%'}}>
            <tbody>
              <tr>
                <td style={{ width: '35%' }}>
                  <h2>{drink.strDrink}</h2>
                </td>
                <td
                  style={{
                    width: '65%',
                    verticalAlign: 'top',
                    paddingLeft: '5%',
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
                      <RecipeIngredientsStyle>
                        <tr>
                          <td>
                            <th>{drink.strIngredient1}</th>
                          </td>
                          <td>
                            <th>{drink.strIngredient2}</th>
                          </td>
                          <td>
                            <th>{drink.strIngredient3}</th>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <th>{drink.strIngredient4}</th>
                          </td>
                          <td>
                            <th>{drink.strIngredient5}</th>
                          </td>
                          <td>
                            <th>{drink.strIngredient6}</th>
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
