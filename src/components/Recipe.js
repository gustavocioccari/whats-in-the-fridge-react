import React, { useState } from 'react';
import RecipeDetails from "./RecipeDetails";
import api from '../services/api';
import '../global.css';

const Recipe = ({ recipe })=>{
  const API_KEY = process.env.API_KEY;

  const [show, setShow] = useState(false);
  const [details, setDetails] = useState([]);

  const getRecipeDetails = async (id) => {
    const detailsResult = await api.get(`recipes/${id}/information?apiKey=${API_KEY}`);
    const detailsJson = detailsResult.data;
    setDetails(detailsJson);
  };

  const showRecipeDetails = async () => {
    getRecipeDetails(recipe.id);
    setShow(!show);
  }

  return(
    <div className="recipe-container">
      <ul>
        <li>
          <span>{recipe.title}</span>
          <img src={recipe.image} alt={recipe.title}/>
          <button onClick={() => showRecipeDetails(recipe.id)} type="button">
            Show recipe details
          </button>
          <a target="_blank" rel="noopener noreferrer" style={{display: "table-cell"}} href={details.sourceUrl}>
            {show && <RecipeDetails details={details}/>}
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Recipe;