import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import LandscapeIcon from '@material-ui/icons/Landscape';
import GestureIcon from '@material-ui/icons/Gesture';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import FaceIcon from '@material-ui/icons/Face';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader>
          Genres
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SportsKabaddiIcon />
        </ListItemIcon>
        <ListItemText primary="Action" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LandscapeIcon />
        </ListItemIcon>
        <ListItemText primary="Adventure" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <GestureIcon />
        </ListItemIcon>
        <ListItemText primary="Anime" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <FilterDramaIcon />
        </ListItemIcon>
        <ListItemText primary="Drama" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FlightTakeoffIcon />
        </ListItemIcon>
        <ListItemText primary="Fiction" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <MoodBadIcon />
        </ListItemIcon>
        <ListItemText primary="Thriller" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FaceIcon />
        </ListItemIcon>
        <ListItemText primary="Horror" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <SentimentVerySatisfiedIcon />
        </ListItemIcon>
        <ListItemText primary="Comedy" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Romance" />
      </ListItem>
    </List>
  );
}
