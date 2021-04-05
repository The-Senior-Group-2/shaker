import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const SearchStyle = styled.div`
  *{
    padding: 5%;
  }
`;



const Search = () => {
  // searchFor is liquorName as of now
  const [ searchFor, setSearchFor ] = useState('');
  // const [ buttonClicked, setButtonClicked ] = useState(false);
  const [ searchResults, setSearchResults ] = useState([]);


  const handleChange = (e) => {
    const { value } = e.target;
    setSearchFor(value);
    console.info(searchFor);
  };

  const handleSearch = async () => {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchFor}`);
    console.info(result);
    setSearchResults(result.data.drinks);
  };

  const handleClick = () => {
    try {
      handleSearch();
    } catch (err) {
      console.info(err);
    }
  };

  const drinkMap = searchResults.map((drink) => {
    return (
      <div
        key={drink.idDrink}
        style={{ border: '1px solid black' }}
      >
        <img src={drink.strDrinkThumb}/>
        <p>{drink.strDrink}</p>
      </div>
    );
  });


  return (
    <div>
      <input
        type='text'
        name='searchFor'
        value={searchFor}
        placeholder='Search for recipes...'
        onChange={handleChange}
      >
      </input>
      <button
        onClick={handleClick}
      >
        Get Recipes!
      </button>
      <SearchStyle>
        <div className='search-result-container'>
          {
            drinkMap
          }
        </div>
      </SearchStyle>
    </div>
  );
};

export default Search;
