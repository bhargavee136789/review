import { Card } from '@mui/material'
import React from 'react'
import { CardMedia , CardContent, Typography } from '@mui/material'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'

import iguana from '../Assets/Images/contemplative-reptile.jpg'
const ImageCard = () => {
  return (
    <Card sx={{ mt : 4}}>
      <CardMedia
        component="img"
        height="140"
        image={iguana}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ImageCard