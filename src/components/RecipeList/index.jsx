import Recipe from '../Recipe'

function RecipeList({recipes}) {
    // console.log(recipes)
    return (
        <div id="recipe-container">
            <ul className="recipe-list">
                {recipes.map(recipeData => <Recipe recipeData={recipeData}/>)}
            </ul>
        </div>
    )
}

export default RecipeList;
