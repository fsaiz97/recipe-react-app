import React from 'react';

function Recipe({recipeData}) {
    return (
        <div id='recipe'>
            <h2 className='recipe-name'>{recipeData.name}</h2>
            <p className='recipe-description'>{recipeData.description}</p>
            <ul className='recipe-ingredients'>To-do</ul>
        </div>
    )
}

export default Recipe;
