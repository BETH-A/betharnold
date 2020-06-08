import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { CardDeck } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import secretImg from "../images2/topSecretStamp.jpg";
import SecretsIcons from "./images";
import projects from "../projects";



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

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <CardDeck>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <WebIcon />
          </Avatar>
        }
        title={props.name}
        subheader={props.subtitle}
      >
      </CardHeader>
      <CardMedia
        className={classes.media}
        image= {props.image}
        title={props.imgAlt}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}        
        </Typography>
      </CardContent>
      <MuiThemeProvider theme={theme}>
        <CardActions disableSpacing>
          <Tooltip title="View code">
            <IconButton aria-label="View code on Github" href={props.link}>
                <CodeIcon />
            </IconButton>
          </Tooltip>
          
          <Button aria-label="Live app" href={props.app}>
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
            {props.role}
          </Typography>
          <Typography paragraph variant="body2" component="p">
            {props.deployed}
          </Typography>
          
          <Box>
            <Typography paragraph variant="body2" component="p">
              Packages used:
            </Typography>
              <SecretsIcons />         
            </Box>
            
         
      
        </CardContent>
      </Collapse>
    </Card>
    </CardDeck>
  );
}