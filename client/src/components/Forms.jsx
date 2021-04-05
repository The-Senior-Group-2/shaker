import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styling
const FormStyles = styled.div`
  background: rgb(35, 35, 35);
  color: rgb(240, 240, 240);
  display: flex;
  flex-flow: column;
  padding: 20%;
  /* align-items: center; */
  /* margin-top: auto; */
  width: 490px;
  button, select{
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
  const [ header, setHeader ] = useState('');

  const { strDescription } = liquorDescription;
  const { strIngredient } = liquor;

  // will handle the state change when an option from select form is selected
  const handleLiquorChange = (e) => {
    const { value } = e.target;
    console.info(value);
    setLiquor({ strIngredient: value });
  };

  // handles the state change when the Search button is clicked
  // also calls the external api to get the data which is then set to the current state of 'liquorDescription'
  const handleDescriptionChange = async () => {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${strIngredient}`, );
    console.info(result);
    setLiquorDescription({ strDescription: result.data.ingredients[0].strDescription });
  };


  // if the value of strIngredient changes (e.g. a second liquor option is chosen), liquorDescription will reset ('')
  useEffect(() => {
    setLiquorDescription('');
  }, [strIngredient]);


  // will dynamically display the header of the information section; if there is an option selected, the header
  // will be displayed using that options value; if there is no option, or if the user reselects the default
  // "Select..." option, no header will be displayed
  const InfoHeader = () => {
    strIngredient ?
      setHeader(`Information about ${strIngredient}:`) :
      setHeader('');
    return (
      <h3>{header}</h3>
    );
  };




  return (
    <FormStyles>
      <div>
        <h3>Select a spirit to learn more:</h3>
        <select
          name='strIngredient'
          value={strIngredient}
          onChange={handleLiquorChange}
        >
          {/* mapping through the liquors array which contains the select form options to create an element for each option */}
          {
            liquors.map((liquor) => (
              <option
                key={liquor.key}
                value={liquor.value}
              >
                {liquor.label}
              </option>
            ))
          }
        </select>
        <br />
        <br />
        <button
          type='submit'
          onClick={handleDescriptionChange}
        >
          Search
        </button>
        <div>
          <InfoHeader />
          <p
            name='strDescription'
            value={strDescription}
          >
            {strDescription}
          </p>
        </div>
      </div>
    </FormStyles>
  );
};



export default Forms;
