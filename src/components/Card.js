import React from 'react';
import {Img} from "react-image";
import PeopleCardFooter from '@mui-treasury/components/cardFooter/people';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import secretImg from "../images2/topSecretStamp.jpg";
import SecretsIcons from "./images";


// import { Link } from "react-router-dom";
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import "../cards";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    marginLeft: 25,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[900],
  },
}));

const theme = createMuiTheme({
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: "#900",
            textDecoration: "none"
          }
        }
      },
      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: "#900"
          }
        }
      }
    }
  });

export default function ProjectCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <WebIcon />
          </Avatar>
        }
        title="Secrets"
        subheader="Web Application"
      />
      <CardMedia
        className={classes.media}
        image= {secretImg}
        title="Top Secret Image"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Secrets allows users to anonymously share secrets. This app was developed as a way to practice Authentication & Security practices. 
        </Typography>
      </CardContent>
      <MuiThemeProvider theme={theme}>
        <CardActions disableSpacing>
          <Tooltip title="View code">
            <IconButton aria-label="View code on Github" href="https://github.com/BETH-A/Secrets">
                <CodeIcon />
            </IconButton>
          </Tooltip>
          
          <Button aria-label="Live app" href="https://secrets-beth.herokuapp.com/">
              View App
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </MuiThemeProvider>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="body2" component="p">Role:</Typography>
          <Typography paragraph variant="body2" component="p">
            This app went through many revisions while enhancing security on each commit to GitHub.
            I started with encryping the password using Mongoose-Encryption then upgraded to Hashing. 
            I then upgraded to Salting & Hashing passwords using bcrypt. Passport.js was used next to 
            strenghten the security. I finally convert the app ths use OAuth, giving the user the 
            ability to login via their Google or Facebook accounts.
          </Typography>
          <Typography paragraph variant="body2" component="p">
            This web app has been deployed on Heroku.
          </Typography>
          
          <Box>
            {/* <CardMedia 
                      className={classes.media}
                      src= {SecretsIcons}
                      title= "Secrets Icons"
                      /> */}
            {/* <PeopleCardFooter component="img" >{SecretsIcons}</PeopleCardFooter> */}
            <Typography paragraph variant="body2" component="p">
              Packages used:
            </Typography>
              <div>
                <img src={SecretsIcons}/>

              </div>
            <Typography paragraph variant="body2" component="p">

              
              MongoDB, EJS, Express, Passport, and many other npm packages.


              </Typography>
            </Box>
         
      
        </CardContent>
      </Collapse>
    </Card>
  );
}