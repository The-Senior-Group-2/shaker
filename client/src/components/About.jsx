import React, { useState } from 'react';
import styled from 'styled-components';
const BarStyle = styled.div`
  background: rgb(35, 35, 35);
  color: rgb(240, 240, 240);
  display: flex;
  flex-flow: column;
  padding: 20%;
  /* align-items: center; */
  /* margin-top: auto; */
  width: 490px;
  button, input{
    background: rgb(35, 35, 35);
    color: rgb(240, 240, 240);
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
  *{
    flex-flow: column;
    align-items: center;
  }
`;
// the bar component will have a search form where users enter ingredients, and a button to add them to that user's bar
// when a user enters ingredient and clicks 'add' button, ingredient will be added to user's bar in database
const Bar = () => {
  const [ ingredient, setIngredient ] = useState('');
  const [ ingredientsList, setIngredientsList ] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    setIngredient(value);
  };
  const handleClick = async () => {
    setIngredientsList((prevList) => {
      return [ ...prevList, ingredient ];
    });
    await setIngredient('');
  };
  const handleKeyDown = (e) => {
    const { key } = e;
    key === 'Enter' ?
      handleClick() :
      null;
  };
  const ingredientsListMap = ingredientsList.map(ingredient => {
    return (
      <li key={1}>
        {ingredient}
      </li>
    );
  });
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
          My Bar:
          <ul>
            {ingredientsListMap}
          </ul>
        </div>
      </div>
    </BarStyle>
  );
};
export default Bar;
