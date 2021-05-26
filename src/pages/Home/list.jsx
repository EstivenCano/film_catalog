import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import LandscapeIcon from "@material-ui/icons/Landscape";
import GestureIcon from "@material-ui/icons/Gesture";
import FilterDramaIcon from "@material-ui/icons/FilterDrama";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import FaceIcon from "@material-ui/icons/Face";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import FavoriteIcon from "@material-ui/icons/Favorite";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList(props) {
  const classes = useStyles();

  return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader>Genres</ListSubheader>}
        className={classes.root}
      >
        <ListItem button>
          <ListItemIcon>
            <SportsKabaddiIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Action" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LandscapeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Adventure" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <GestureIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Anime" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FilterDramaIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Drama" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FlightTakeoffIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Fiction" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MoodBadIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Thriller" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FaceIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Horror" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SentimentVerySatisfiedIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Comedy" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FavoriteIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Romance" />
        </ListItem>
      </List>
  );
}
