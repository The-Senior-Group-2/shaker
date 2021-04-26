import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MultiSearch from './MultiSearch';
import ConditionalBannerH4 from './ConditionalBannerH4';
import axios from 'axios';


//
// Styling
const BarStyle = styled.div`
  background: inherit;
  color: ghostwhite;
  display: flex;
  flex-flow: column;
  padding: 20%;
  width: 490px;
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
  h3{
    color: cornflowerblue
  };
`;
// the bar component will have a text form where users enter ingredients, and a button to add them to that user's bar
// when a user enters ingredient and clicks 'add' button, ingredient will be added to user's bar in database
const Bar = () => {
  const [ ingredient, setIngredient ] = useState('');
  const [ ingredientsList, setIngredientsList ] = useState([]);
  const [ allIngs, setAllIngs] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setIngredient(value);
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/list.php',
      params: {i: 'list'},
      headers: {
        'x-rapidapi-key': '70cf5db794msh68d005415beb5c4p1b4cefjsn04b516b60f77',
        'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com'
      }
    };
    if (!allIngs.length) {
      axios.request(options)
        .then(res => {
          // const ingArr = [];
          const ingArray = res.data.drinks.map(ing => {
            return ing.strIngredient1;
          });
          // console.log(ingArray);
          setAllIngs(ingArray);
        }).then(() => {

          // console.log('hereeeeee', allIngs);
        });
    }
  }, []);

  const handleClick = async () => {
    try {
      await setIngredientsList((prevList) => {
        return [ ...prevList, ingredient ];
      });
      setIngredient('');
    } catch (error) {
      console.info(error);
    }
  };


  // Press enter key as an alternative to clicking the button
  const handleKeyDown = (e) => {
    const { key } = e;
    key === 'Enter' && handleClick();
  };
  // IngredientsMapComponent filters out any empty string, which is added as a result
  // of the user clicking button with an empty input field. When this occurs the empty
  // string won't be rendered to the page either way, but it is still added to the
  // ingredientsList, and must be removed in order to correctly pass items to api call.
  // The function then creates a list entry for the newly added ingredient.
  const IngredientsMapComponent = () => {
    const compileListEntries = ingredientsList.filter(ingredient => {
      return ingredient.length !== 0;
    })
      .map((ingredient, i) => {
        return (
          <li
            key={i}
            name={ingredient}
          >
            {ingredient}
          </li>
        );
      });
    return compileListEntries;
  };
  return (
    <BarStyle>
      <div>
        <input
          type='text'
          name='ingredient'
          value={ingredient}
          placeholder='Enter ingredients...'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        >
        </input>
        <button
          onClick={handleClick}
        >
          Add to Bar
        </button>
        <br />
        <br />
        <br />
        <div>
          <ConditionalBannerH4
            banner='My Bar:'
            item={ingredientsList}/>
          <ul>
            <IngredientsMapComponent />
          </ul>
        </div>
        <br />
        <br />
        <ConditionalBannerH4
          banner="Tap the SIP button when you're done!"
          item={ingredientsList}
        />
        <div>
          <MultiSearch
            ingredientsList={ingredientsList}
            ingredient={ingredient}
          />
        </div>
      </div>
    </BarStyle>
  );
};
export default Bar;
