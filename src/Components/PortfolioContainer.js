import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { SocialIcon } from 'react-social-icons';

import Image from 'react-image-resizer';

import Grid from '@material-ui/core/Grid';

import Popcorn from '../images/popcorn.jpeg';

import Twitter from '../images/twitter.jpg';

import Books from '../images/books.jpg';

import Friends from '../images/friends.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
        <Grid container
  spacing={2}
  direction="row"
  alignItems="center"
  justify="center"
  style={{ 
    minHeight: '100vh',
    paddingBottom: "30px",
    fontFamily: "Raleway, sans-serif",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "80px"
    }}>
    <Grid item xs={4}>
    <Card className={classes.card}
              style={{
                backgroundColor: "#004d99",
                color: "white",
              }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Popcorn}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            MovieNight
          </Typography>
          <Typography variant="body2" component="p">
          MovieNight is a web app that allows users to plan a movie night in, or a movie night out, as well as provides suggestions for movies to watch and snacks to eat.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
      <SocialIcon url="https://github.com/walkerfloyd1/MovieNight" />
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card className={classes.card}
    style={{
      backgroundColor: "#004d99",
      color: "white"
    }}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Twitter}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          NickBot
        </Typography>
        <Typography variant="body2" component="p">
        This is a Twitter bot I created to annoy my best friend. It instantly favorites and retweets every single one of his and my tweets.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
    <SocialIcon url="https://github.com/walkerfloyd1/twitter-bot" />
    </CardActions>
  </Card>
  </Grid>
  <Grid item xs={4}>
  <Card className={classes.card}
  style={{
    backgroundColor: "#004d99",
    color: "white",
  }}>
    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={Books}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          StoryTime
        </Typography>
        <Typography variant="body2" component="p">
        This is an app that allows users to create and add on to existing stories in the database.
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions style={{
      backgroundColor: "#99ccff"
    }}>
    <SocialIcon url="https://github.com/Jokatsu/StoryTime" />
    </CardActions>
  </Card>
  </Grid>
  </Grid>
  
  </div>
  );
}