import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper, Rating } from '@mui/material';

export function StoreItem({ add, item, cart, remove }) {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => 
  {
    if (cart[item.name] > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  },
  [cart, add, item]
);
  return (
    <Card sx={{ minWidth: 150, maxWidth: 200, minHeight: 300, margin: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          src={item.image}
          alt={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <br></br>
          <Rating name="half-rating-read" value={((13-item.popular)/2.5)} precision={0.1} readOnly />
          <Typography variant="body1" color="text.primary">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{add(item)}}>
          Add to cart
        </Button>
        <Button disabled={isDisabled} size="small" color="primary" onClick={()=>{remove(item)}}>
          Remove one from cart
        </Button>
      </CardActions>
      <Paper elevation={3} />
    </Card>
  );
}