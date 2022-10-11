import React from 'react';

function Recipe({recipeData}) {
    return (
        <div className='recipe'>
            <div className='recipe-header'>
                <h2 className='recipe-name'>{recipeData.name}</h2>
                <p className='recipe-description'>{recipeData.description}</p>
            </div>
            <ul className='recipe-ingredients'>To-do</ul>
        </div>
    )
}

export default Recipe;
