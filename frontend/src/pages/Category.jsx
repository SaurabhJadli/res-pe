import { Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Navbar from '../components/Navbar';

export default function Category() {
  const location = useLocation();
  const { category } = location.state;

  const [meal, setMeal] = React.useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        setMeal(response.data.meals || []);
      } catch (error) {
        console.error('Error fetching meals:', error);
        setMeal([]);
      }
    };

    fetchMeals();
  }, [category]);

  return (
    <div>
      <Navbar />
      <h4>Category: {category}</h4>
      <div className="d-flex flex-wrap">
        {meal.length > 0 ? (
          meal.map((item) => (

            <Card sx={{ maxWidth: 345, minWidth: 345, margin: 4 }} key={item.idMeal}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.strMealThumb}
                  alt={item.strMeal}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.strMeal}
                  </Typography>
                </CardContent>
                <Link to={`/recipeDetail/${item.idMeal}`} target='_blank'>
                  <Button variant='contained' size="medium" color="primary">
                    View Recipe
                  </Button>
                </Link>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <p className="mx-auto mt-5 fs-5">No meals found</p>
        )}
      </div>
    </div>
  );
}
