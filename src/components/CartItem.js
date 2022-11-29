import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Paper, Rating } from '@mui/material';

export function CartItem({ item, count, price, index, remove }) {
  return (
    <div>
      <p>{count} - {item}</p>
    </div>
  );
}