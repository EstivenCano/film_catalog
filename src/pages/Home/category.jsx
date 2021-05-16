import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    paddingInline: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    '&::-webkit-scrollbar-track': {
      background: "#f0efff"
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: "5px",
      backgroundColor: '#3f51b5',
    },
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {

  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
const ByCategory = (props) => {
  const [movies, setMovies] = useState();
  const img = "https://image.tmdb.org/t/p/w500";
  const apiKey = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const [isLooked, setIsLooked] = useState(false);

  async function getMovies() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.category}?api_key=${apiKey}&language=en-US`
      )
      .then((movies) => {
        setMovies(movies.data.results);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!movies) {
      getMovies();
    }
  });

  return (
    <div className={classes.root}>
      {movies ? (
        <GridList className={classes.gridList} cols={6}>
          {movies.map((movie) => (
            <GridListTile key={movie.id} className={classes.image}>
              <img
                src={img + movie.poster_path}
                alt={movie.title}
              />
              <GridListTileBar
                title={movie.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${movie.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ByCategory;
