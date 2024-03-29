import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar,  } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import WebIcon from '@material-ui/icons/Web';
import WebAssetIcon from '@material-ui/icons/WebAsset';

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
      backgroundColor: "#383838",
    }}));
  

function CardAvatar (props){

    const classes = useStyles();
    return(
      
        <Avatar className={classes.avatar} variant="circle">
           {props.avatarIcon}
             {/* <WebIcon />  */}
         </Avatar>
    )
}

export default CardAvatar;