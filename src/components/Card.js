import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Button, Card, CardActions, CardActionArea, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Tooltip,Typography, responsiveFontSizes } from '@material-ui/core';
import CircularProgress from '@material-ui/core';
import { red, grey} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import CardAvatar from "./CardAvatar";
import SecretsIcons , { KeeperIcons } from "./images";
import secretsIcons from './images';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "var(--color-grey-dark)",
    // background: 'linear-gradient(180deg, #900 30%, #eee 100%)',
    background: grey[300],
  },
  header:{
    background: "#900",
    color: "#eee"
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
    backgroundColor: "#383838",
    sizes: 100,
  }
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 20,
    body1: {
      fontSize: 30,
    }
  },
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
          }}},
      MuiCardContent: {
        root: {
          height: 150
        }},
        }});

export default function ProjectCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card className={classes.root}>
      <CardActionArea>
        <CardHeader  className={classes.header}       
          avatar= {props.avatarIcon}
            // <CardAvatar className={classes.avatar}></CardAvatar>
          title={props.name}
          titleTypographyProps={{variant: "h4"}} 
          subheader={props.subtitle}
          subheaderTypographyProps={{variant: "h6", color: "#eee"}}
          />        
        <CardMedia
          component={classes.component}
          className={classes.media}
          image= {props.image}
          title={props.imgAlt}/>
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.description}        
          </Typography>
        </CardContent>
        </CardActionArea>
        <MuiThemeProvider theme={theme}>
          <CardActions disableSpacing>
            <Tooltip title="View code">
              <IconButton aria-label="View code on Github" href={props.link}>
                  <CodeIcon />
              </IconButton>
            </Tooltip>
            <Button aria-label="Live app" href={props.app}>View App</Button>
            <IconButton
              className={clsx(classes.expand, {[classes.expandOpen]: expanded,})}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more">
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </MuiThemeProvider>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body1" color="textSecondary" component="p">Role:</Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="p">
              {props.role}
            </Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="p">
              {props.deployed}
            </Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="p">
              Packages used:
            </Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="p">
              {props.packages}
            </Typography>
            <Typography paragraph variant="body1" color="textSecondary" component="img">
              {/* {props.icons} */}
            </Typography>
            <KeeperIcons /> 
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}