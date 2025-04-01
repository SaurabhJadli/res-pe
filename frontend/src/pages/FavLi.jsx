import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Navbar from "../components/Navbar";

export default function FavLi() {
  return (
<>
<Navbar />
<h1>Favorite List</h1>

<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pancake
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          In a large bowl, whisk together 1/2 cup buckwheat flour, 2/3 cup all-purpose flour, 1/2 teaspoon salt, and 1 teaspoon yeast. Make a well in the cen...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="error">
          Remove
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
</>  )
}
