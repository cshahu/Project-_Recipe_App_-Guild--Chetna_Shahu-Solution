import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {


  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const [recipes, setRecipes] = useState(RecipeData);

  // Function to add a new recipe
  const addRecipe = (newRecipe) => {
    setRecipes(prevRecipes => [...prevRecipes, newRecipe]);
  };

  // Function to delete an existing recipe
  const deleteRecipe = (name) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.name !== name);
    setRecipes(updatedRecipes);
  };
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
     
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
