import React from 'react';

function RecipeList({recipes}) {
    console.log(recipes)
    return (
        <div id="recipe-container">
            <ul className="recipe-list">
                {recipes.map(recipe => <li>{recipe.name}</li>)}
            </ul>
        </div>
    )
}

export default RecipeList;
