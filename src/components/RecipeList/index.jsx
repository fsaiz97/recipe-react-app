import Recipe from '../Recipe'

function RecipeList({recipes, setRecipes}) {
    console.log(recipes)
    return (
        <div className="recipe-container">
            <ul className="recipe-list">
                {recipes.map((recipeData, idx) => <Recipe key={idx} recipeData={recipeData} recipes={recipes} setRecipes={setRecipes}/>)}
            </ul>
        </div>
    )
}

export default RecipeList;
