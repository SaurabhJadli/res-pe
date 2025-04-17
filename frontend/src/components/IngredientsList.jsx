import { Button } from "@mui/material"
import ListAltIcon from '@mui/icons-material/ListAlt';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SendIcon from '@mui/icons-material/Send';

export default function IngredientsList(props) {
    // eslint-disable-next-line react/prop-types
    const ingredientsListItems = props.ingredient.map(ingredient => (
        <ListItemButton key={ingredient}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={ingredient} />
      </ListItemButton>
    ))
    return (
        <section className="p-4">
            <h2>ingredients on hand:</h2>

            <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
                {ingredientsListItems}
                </List>
            {
                // eslint-disable-next-line react/prop-types
                props.ingredient.length > 3 &&
                <div className="get-recipe-container">
                    <div ref={
                        // eslint-disable-next-line react/prop-types
                        props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <Button variant="outlined" color="error" startIcon={<ListAltIcon />} onClick={
                        // eslint-disable-next-line react/prop-types
                        props.getRecipe}>Get a recipe</Button>
                </div>}
        </section>
    )
}