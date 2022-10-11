import React from 'react';

function Recipe({recipeData, recipes, setRecipes}) {
    function handleLike() {
        setRecipes(recipes.map(recipe => {
            if (recipe === recipeData) {
                return {
                    ...recipe,
                    liked: true
                }
            }
            return recipe
        }))
    }

    return (
        <div className='recipe'>
            <div className='recipe-header'>
                <h2 className='recipe-name'>{recipeData.name}</h2>
                <p className='recipe-description'>{recipeData.description}</p>
            </div>
            <ul className='recipe-ingredients'>
                {recipeData.ingredients.map((entry, idx) => <li className='recipe-ingredient'>{entry}</li>)}
            </ul>
            <button className='like-btn' onClick={handleLike}>Like</button>
            <div className='triangle'/>
        </div>
    )
}

export default Recipe;
