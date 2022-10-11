import React, {useState} from 'react'

// import './App.css'
import recipes from './recipes'
// console.log(recipes)
import {RecipeList} from "./components"

function App() {    
    return (
        <div>
            <header>Recipe App</header>
            <RecipeList recipes={recipes}/>
        </div>
    )
}

export default App;
