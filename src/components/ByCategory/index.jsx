import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import MovieDetail from "../../pages/MovieDetail";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { motion } from "framer-motion";
import useStyles from "./style";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
const ByCategory = (props) => {
  const img = "https://image.tmdb.org/t/p/w400";
  const apiKey = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const [movies, setMovies] = useState();
  const [isBusy, setIsBusy] = useState(false);
  const [cols, setCols] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [movieId, setMovieId] = useState();

  const handleAddClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

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
            <motion.div
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <GridList className={classes.gridList} cols={cols}>
                {movies.map((movie) => (
                  <GridListTile key={movie.id}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img
                        className={classes.image}
                        src={img + movie.poster_path}
                        alt={movie.title}
                      />
                    </motion.div>
                    <GridListTileBar
                      title={movie.title}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                      actionIcon={
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            aria-label={`open ${movies.title} details`}
                            color="secondary"
                            onClick={() => {
                              handleAddClick();
                              setMovieId(movie.id);
                            }}
                          >
                            <OpenInNewIcon className={classes.title} />
                          </IconButton>
                        </motion.div>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className={classes.root}>
          <CircularProgress color="secondary" />
        </div>
      )}
      {isOpen ? (
        <MovieDetail
          isOpen={isOpen}
          handleClose={handleClose}
          movieId={movieId}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default ByCategory;
