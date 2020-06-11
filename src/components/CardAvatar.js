import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { CardDeck } from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import secretImg from "../images2/topSecretStamp.jpg";
import SecretsIcons from "./images";
import projects from "../projects";
import CardHead from "./CardHead";

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
    }}));
  

function CardAvatar (props){

    const classes = useStyles();
    return(
        <Avatar aria-label="recipe" className={classes.avatar}>
            {/* {props.avatarIcon} */}
            <WebIcon />
        </Avatar>
    )
}

export default CardAvatar;