import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styling
const FormStyles = styled.div`
  display: flex;
  flex-flow: column;
  width: 600px;
  margin-left: 1.5rem;
  button, select, input{
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
  }
`;

// all the options for the select form
const liquors = [
  {value: '', label: 'Select...', key: 0},
  {value: 'Bourbon', label: 'Bourbon', key: 1},
  {value: 'Gin', label: 'Gin', key: 2},
  {value: 'Rum', label: 'Rum', key: 3},
  {value: 'Scotch', label: 'Scotch', key: 4},
  {value: 'Tequila', label: 'Tequila', key: 5},
  {value: 'Vodka', label: 'Vodka', key: 6},
  {value: 'Whiskey', label: 'Whiskey', key: 7}
];


const Forms = () => {
  const [ liquor, setLiquor ] = useState({ strIngredient: '' });
  const [ liquorDescription, setLiquorDescription ] = useState({ strDescription: '' });

  // will handle the state change when an option from select form is selected
  const handleLiquorChange = (e) => {
    const { value } = e.target;
    console.info(value);
    setLiquor({ strIngredient: value });
  };

  // handles the state change when the Search button is clicked
  // also calls the external api to get the data which is then set to the current state of 'liquorDescription'
  const handleDescriptionChange = async () => {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquor.strIngredient}`, );
    console.info(result);
    setLiquorDescription({ strDescription: result.data.ingredients[0].strDescription });
  };


  return (
    <FormStyles>
      <div>
        <h3>Select a liquor to learn more about it:</h3>
        <select name='strIngredient' value={liquor.strIngredient} placeholder='Select...' onChange={handleLiquorChange}>
          {/* mapping through the liquors array which contains the select form options */}
          {liquors.map((liquor) => (
            <option key={liquor.key} value={liquor.value}>{liquor.label}</option>
          ))}
        </select>
        <br />
        <br />
        <button type='submit' onClick={handleDescriptionChange}>Search</button>
        <div>
          <h3>Information about {liquor.strIngredient}:</h3>
          <p name='strDescription' value={liquorDescription.strDescription}>
            {liquorDescription.strDescription}
          </p>
        </div>
      </div>
    </FormStyles>
  );
};



export default Forms;
