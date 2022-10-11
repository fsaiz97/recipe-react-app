import {useState} from 'react'

import './App.css'
import recipes from './recipes'
// console.log(recipes)
import {RecipeList} from "./components"

function App() {    
    return (
        <div>
            <header>
                <h1>Recipe App</h1>
            </header>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default App;
