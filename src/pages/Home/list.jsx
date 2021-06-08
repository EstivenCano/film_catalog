import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
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

export default function NestedList() {
  const classes = useStyles();
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const movieByGenre = (genreId) => {
    history.push(`/genre/${genreId}`);
  };

  return (
    <List
      component="nav"
      subheader={<ListSubheader>Genres</ListSubheader>}
      className={classes.root}
    >
      <ListItem
        button
        onClick={() => {
          movieByGenre(28);
          handleListItemClick(1);
        }}
        selected={selectedIndex === 1}
        aria-label="action"
      >
        <ListItemIcon>
          <SportsKabaddiIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Action" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(12);
          handleListItemClick(2);
        }}
        selected={selectedIndex === 2}
        aria-label="adventure"
      >
        <ListItemIcon>
          <LandscapeIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Adventure" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(16);
          handleListItemClick(3);
        }}
        selected={selectedIndex === 3}
        aria-label="animation"
      >
        <ListItemIcon>
          <GestureIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Animation" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(18);
          handleListItemClick(4);
        }}
        selected={selectedIndex === 4}
        aria-label="drama"
      >
        <ListItemIcon>
          <FilterDramaIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Drama" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(14);
          handleListItemClick(5);
        }}
        selected={selectedIndex === 5}
        aria-label="fiction"
      >
        <ListItemIcon>
          <FlightTakeoffIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Fiction" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(53);
          handleListItemClick(6);
        }}
        selected={selectedIndex === 6}
        aria-label="thriller"
      >
        <ListItemIcon>
          <MoodBadIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Thriller" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(27);
          handleListItemClick(7);
        }}
        selected={selectedIndex === 7}
        aria-label="horror"
      >
        <ListItemIcon>
          <FaceIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Horror" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(35);
          handleListItemClick(8);
        }}
        selected={selectedIndex === 8}
        aria-label="comedy"
      >
        <ListItemIcon>
          <SentimentVerySatisfiedIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Comedy" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(10749);
          handleListItemClick(9);
        }}
        selected={selectedIndex === 9}
        aria-label="romance"
      >
        <ListItemIcon>
          <FavoriteIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Romance" />
      </ListItem>
    </List>
  );
}
