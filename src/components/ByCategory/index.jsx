import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import useStyles from "./style";

import axios from "axios";


// eslint-disable-next-line import/no-anonymous-default-export
const ByCategory = (props) => {
  const [movies, setMovies] = useState();
  const img = "https://image.tmdb.org/t/p/w500";
  const apiKey = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const [isBusy, setIsBusy] = useState(false);
  const [cols, setCols] = useState(0);

  async function getMovies() {
    setIsBusy(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.category}?api_key=${apiKey}&language=en-US`
      )
      .then((movies) => {
        setMovies(movies.data.results);
        setIsBusy(false);
      })
      .catch((err) => {
        console.log("Error" + err);
        setIsBusy(false);
      });
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!movies) {
      getMovies();
      setCols(getViewport());
    }
    window.addEventListener(
      "resize",
      function () {
        setCols(getViewport());
      },
      true
    );
  });

  function getViewport() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width <= 576) return 2;
    if (width <= 768) return 3;
    if (width <= 992) return 4;
    if (width <= 1200) return 5;
    return 6;
  }

  return (
    <>
      {!isBusy ? (
        <div className={classes.root}>
          {movies ? (
            <GridList className={classes.gridList} cols={cols}>
              {movies.map((movie) => (
                <GridListTile key={movie.id} className={classes.image}>
                  <img src={img + movie.poster_path} alt={movie.title} />
                  <GridListTileBar
                    title={movie.title}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                    actionIcon={
                      <IconButton
                        aria-label={`open ${movies.title} details`}
                        color="secondary"
                      >
                        <OpenInNewIcon className={classes.title} />
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
      ) : (
        <CircularProgress color="secondary" />
      )}
    </>
  );
};
export default ByCategory;
