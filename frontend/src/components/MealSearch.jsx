import { use, useEffect, useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from "./RecipeCard";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MealSearch() {

  const [meal, setMeal] = useState([]);
  const [query, setQuery] = useState("");
  const [alpha, setAlpha] = useState('a')


  const fetchMeal = async () => {
    if (!query) return; // Prevent empty search
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );

      // Filter out meals with categories "Chicken", "Pork", and "Beef"
      const filteredMeals = (response.data.meals || []).filter(
        (meal) => !["Chicken", "Pork", "Beef"].includes(meal.strCategory)
      );

      setMeal(filteredMeals); // Set meals or empty array if no result

    } catch (error) {
        console.error("Error fetching meals:", error);
    }
};

useEffect(() => {
  const fetchMeals = async () => {
  
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`
      );
 // Filter out meals with categories "Chicken", "Pork", and "Beef"
 const filteredMeals = (response.data.meals || []).filter(
  (meal) => !["Chicken", "Pork", "Beef"].includes(meal.strCategory)
);

setMeal(filteredMeals); // Set meals or empty array if no result
};

  fetchMeals();
}, [alpha])

const uppercaseAlphabet = [];
for (let i = 65; i <= 90; i++) {
  uppercaseAlphabet.push(String.fromCharCode(i));
}

console.log(alpha);

  return (
    <div className="meal-container">
      <h2>Search for a Meal</h2>

<TextField
          id="outlined-textarea"
          label="Enter Meal Here"
          placeholder="e.g., Soup, cake, potato etc."
          value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-50 m-2"
        />

<Button variant="contained" onClick={fetchMeal} className="rounded-5 mt-3">
<SearchRoundedIcon />
Search</Button>

<hr />
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
          <SearchRoundedIcon />
          Search by first letter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {uppercaseAlphabet.map((alpha) => (
  <span key={alpha}><Button color="error" onClick={() => {setAlpha(alpha)}}>{alpha}</Button></span>
))}
          </Typography>
        </AccordionDetails>
      </Accordion>


<div className="d-flex flex-wrap">
        {meal.length > 0 ? (
        meal.map((meal) => (

<Card key={meal.idMeal}
mealID={meal.idMeal}
 title={meal.strMeal}
 category={meal.strCategory}
    area={meal.strArea}
    image={meal.strMealThumb}
    alt={meal.strMeal}
    instructions={meal.strInstructions}
    youtube={meal.strYoutube}
  />
  

        ))
      ) : (
        <p className="mx-auto mt-5 fs-5">No meals found</p>
      )
      }
      </div>
    </div>
  );
}
