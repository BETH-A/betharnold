import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip, Typography, CircularProgress } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import CardAvatar from "./CardAvatar";
import SecretsIcons , { KeeperIcons }from "./images";
import secretsIcons from './images';

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

const theme = createMuiTheme({
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: "#900",
            textDecoration: "none"
          }}},
      MuiButton: {
        root: {
          '&:hover': {
            backgroundColor: "#900"
          }}}}});

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid className="grid"
      items
      direction="row"
      wrap="wrap"
      justify="space-between"
      alignItems="center"
      alignContent="flex-start"
    >

      <Card className={classes.root}>
        <CardHeader 
          
          avatar= {
            props.avatarIcon
          // <CardAvatar />
          }
          title={props.name}
          subheader={props.subtitle}
        />
        
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
            <Typography paragraph variant="body2" component="p">
              Packages used:
            </Typography>
            <Typography paragraph variant="body2" component="p">
              {props.packages}
            </Typography>
            <Typography paragraph variant="body2" component="img">
              {/* {props.icons} */}
            </Typography>
            <KeeperIcons />
            
            
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}