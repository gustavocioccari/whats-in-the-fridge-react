import React, { useState } from 'react';

import Recipe from '../../components/Recipe';
import Notification from '../../components/Notification';

import api from '../../services/api';

import logopng from '../../assets/logo.png';
import '../../global.css';

function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [notification, setNotification] = useState('');

  const API_KEY = process.env.API_KEY;

  const findbyingredients = `recipes/findByIngredients?ingredients=${query}&number=50&ranking=1&apiKey=${API_KEY}`;

  const getData = async () => {
    if (query !== ''){
        const recipeResult = await api.get(findbyingredients);
        const recipeJson = recipeResult.data;
        setRecipes(recipeJson);
      }else{
      setNotification("Please fill the form");
    }
  };

  const onChange = e => setQuery(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="app-container">
      <img src={logopng} alt="What's on the Fridge"/>
      <form onSubmit={onSubmit} className="search-container">
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Type the ingredients you have at home. Eg.: banana, milk"
        />
        <button type="submit">Search</button>
      </form>
      {notification !== "" && <Notification notification={notification} />}
    <div className="recipes-container">
      {recipes !== [] }
          {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
    </div>    
    </div>
  );
}

export default Search;
