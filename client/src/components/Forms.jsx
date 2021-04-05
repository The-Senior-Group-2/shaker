import React, { useState } from 'react';
import axios from 'axios';


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


  const handleLiquorChange = (e) => {
    const { value } = e.target;
    console.info(value);
    setLiquor({ strIngredient: value });
  };

  const handleDescriptionChange = async () => {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${liquor.strIngredient}`, );
    console.info(result);
    setLiquorDescription({ strDescription: result.data.ingredients[0].strDescription });
  };

  return (
    <div>
      <h3>Liquor Learning Center</h3>
      <p>Select a liquor to learn more about it:</p>
      <select name='strIngredient' value={liquor.strIngredient} placeholder='Select...' onChange={handleLiquorChange}>
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
  );
};



export default Forms;
