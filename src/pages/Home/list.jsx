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

export default function NestedList(props) {
  const classes = useStyles();
  const history = useHistory();

  //TODO Create a function to select the genre ID
  const movieByGenre = (genreId) => {
    history.push(`/genre/${genreId}`);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Genres</ListSubheader>}
      className={classes.root}
    >
      <ListItem
        button
        onClick={() => {
          movieByGenre(28);
        }}
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
        }}
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
        }}
      >
        <ListItemIcon>
          <GestureIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Anime" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          movieByGenre(18);
        }}
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
        }}
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
        }}
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
        }}
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
        }}
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
        }}
      >
        <ListItemIcon>
          <FavoriteIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Romance" />
      </ListItem>
    </List>
  );
}
