import {useState} from 'react'

import './App.css'
import recipesData from './recipes'
// console.log(recipes)
import {RecipeList} from "./components"

function App() { 
    const [recipes, setRecipes] = useState(recipesData);

    return (
        <div>
            <header>
                <h1>Recipe App</h1>
            </header>
            <RecipeList recipes={recipes} setRecipes={setRecipes}/>
        </div>
    )
}

export default App;
