import Recipe from '../Recipe'

function RecipeList({recipes, setRecipes}) {
    // console.log(recipes)
    return (
        <div className="recipe-container">
            <ul className="recipe-list">
                {recipes.map(recipeData => <Recipe recipeData={recipeData} recipes={recipes} setRecipes={setRecipes}/>)}
            </ul>
        </div>
    )
}

export default RecipeList;
