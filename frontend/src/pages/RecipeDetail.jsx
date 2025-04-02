import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Button } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LaunchIcon from '@mui/icons-material/Launch';

export default function RecipeDetail() {

  const { mealID } = useParams();

  let [mealInfo, setMealInfo] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMealInfo(data.meals[0]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getIngredients = () => {
    if (!mealInfo) return [];

    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealInfo[`strIngredient${i}`];
      const measure = mealInfo[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  return (
    <>
      <Navbar />

      <main>
        {mealInfo ? (
          <div className='d-flex flex-wrap p-5'>
            <img
              src={mealInfo.strMealThumb}
              alt={mealInfo.strMeal}
              className="img-fluid rounded-4"
            />
            <div className='px-3'>
              <h2 className="text-2xl font-bold mb-4 w-100">{mealInfo.strMeal}</h2>
              <p className="mt-2 text-gray-700">
                <strong>Category:</strong> {mealInfo.strCategory}
                <strong className='ms-4'>Area:</strong> {mealInfo.strArea}
              </p>
              <p>
                <Button sx={{ color: "gray", backgroundColor: "red" }} className='p-2 m-2'>
                  <a href={mealInfo.strYoutube} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                    <YouTubeIcon />
                    <p style={{ color: "white", display: "inline" }}>
                      Watch Video
                    </p>
                  </a>
                </Button>
                <a href={mealInfo.strSource} target="_blank" rel="noopener noreferrer">
                  <Button variant='contained' size="medium" color="primary" className='p-2 m-2'>
                    <LaunchIcon />
                    View Source
                  </Button>
                </a>
              </p>

              <div className='ingredients p-2'>
                <h3 className="text-lg font-semibold mt-3">Ingredients:</h3>
                <ul className="list-disc ml-6 text-gray-700">
                  {getIngredients().map((item, index) => (
                    <li key={index}>
                      {item.measure} {item.ingredient}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            <h2 className='w-100 mt-4'>Instructions:</h2>
            <div className='instructions p-3'>
              <p className="mt-2 text-gray-600">{mealInfo.strInstructions}</p>
            </div>
            <p className='mt-2'>Enjoy your meal!</p>
          </div>
        ) : (
          <p>Loading meal details...</p>
        )}
      </main>

      <Footer />
    </>
  );
}
