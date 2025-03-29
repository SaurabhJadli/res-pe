import React, { useContext } from 'react'
import { Link } from 'react-router'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function RecipeCard(props) {

  let mealID = props.mealID;
  return (
<>
<Card sx={{ maxWidth: 345, margin:4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.image}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <strong>Category:</strong> {props.category}
          <p className='card-text'><strong>Area:</strong> {props.area}</p>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <strong>Instructions: </strong> 
          {props.instructions.slice(0, 150)}...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button sx={{ color:"gray", backgroundColor: "red" }}>
        <a href={props.youtube} target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
        <YouTubeIcon />
            <p style={{color: "white", display: "inline"}}>
            Watch Video
            </p>
          </a>
          </Button>
          <Link to={`/recipeDetail/${mealID}`} target='_blank'>
        <Button variant='contained' size="medium" color="primary">
        View Recipe
        </Button>
        </Link>
      </CardActions>
    </Card>
</>  
)
}