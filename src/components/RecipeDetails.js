import React from 'react';
import '../global.css';

const RecipeDetails = ({ details }) => {
    return(
      <ul className="details-container">
        <li>
          <h4>You can find the recipe details here {details.sourceUrl}</h4>
        </li>
      </ul>
    );
};

export default RecipeDetails;