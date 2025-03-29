import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import IngredientsList from "../components/IngredientsList";
import Recipe from "../components/Recipe";
import { getRecipeFromMistral } from "../ai";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function AIchef() {

    const [ingredient, setIngredient] = useState([])

    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

    async function getRecipe() {
        const genRecipe = await getRecipeFromMistral(ingredient)
        setRecipe(genRecipe)
    }

    function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredient(prevIngredients => [...prevIngredients, newIngredient])
}

  return (
<>
<Navbar />
<h1 className="text-center mt-4">AI Chef</h1>

<main>
            <form action={addIngredient} className="add-ingredient text-center">

<TextField
          id="outlined-textarea"
          placeholder="e.g., potato"
          aria-label="Add ingredient"
          name="ingredient"
        className="w-50 m-2"
        />

<Button variant="contained" type="submit" className="rounded-5 mt-3" startIcon={<AddIcon />}>Add ingredient</Button>

            </form>

          {ingredient.length > 0 &&
           <IngredientsList 
                ref={recipeSection}
                ingredient={ingredient}
                getRecipe={getRecipe}
           />
           }
            
            {recipe && <Recipe recipe={recipe} />}
        </main>

<Footer />
</>  )
}
