import React from 'react';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import projects from "../projects";
import CardAvatar from "./CardAvatar";


import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  media: {
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

function CardHead (props){
  const classes = useStyles();
    return(
      <CardHeader
        
        
      />
    )
}

export default CardHead;