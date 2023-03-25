import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function About() {
  return (
    <div>
    <Card style={{ margin:" 5px auto 44px"}}sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fabout-me-icon%2F&psig=AOvVaw3egpiohMbtAlb8juR32N_U&ust=1679739507003000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCu6Lar9P0CFQAAAAAdAAAAABAE"
          alt="me"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mohar singh
          </Typography>
          <Typography variant="body2" color="text.main">
           I am Mohar Singh,student at engineering college ajmer,you can follow me on twitter,i have made this website  beacause , the papers of btu and rtu have lots of diffrence,you can helpl me by sending btu papers to "moharsinghzxz@gmail.com".
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}