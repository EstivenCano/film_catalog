import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import {
  CircularProgress,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from "@material-ui/core";
import MovieDetail from "../../pages/MovieDetail";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { motion } from "framer-motion";
import useStyles from "./style";
import { OpenContext } from "../../components/Context";
import Pagination from "@material-ui/lab/Pagination";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
const ByGenre = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [cols, setCols] = useState(0);
  const [movieId, setMovieId] = useState();
  const classes = useStyles();
  const { value } = useContext(OpenContext);
  const [open] = value;
  const [isOpen, setIsOpen] = useState();
  const [movies, setMovies] = useState();
  const genre = useParams();
  const history = useHistory();
  const [page, setPage] = React.useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function getMovies() {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre.id}`
      )
      .then((movies) => {
        setMovies(movies.data.results);
        setTotalPages(movies.data.total_pages);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }

  async function updateMovies() {
    await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre.id}&page=${page}`
      )
      .then((movies) => {
        setMovies(movies.data.results);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      function () {
        setCols(getViewport());
      },
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    getMovies();
    setPage(1);
    if (!movies) {
      setCols(getViewport());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname]);

  useEffect(() => {
    if (page >= 1) {
      updateMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleAddClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  function getViewport() {
    const width = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (width <= 576) return 2;
    if (width <= 768) return 3;
    if (width <= 992) return 4;
    if (width <= 1200) return 5;
    return 5;
  }

  const renderMovies = () => {
    if (movies) {
      return (
        <>
          <Grid className={classes.root}>
            <GridList className={classes.gridList} cols={cols}>
              {movies.map((movie, index) => (
                <GridListTile key={movie.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                          alt={movie.title}
                          width="100%"
                        />
                      ) : (
                        <img
                          src={`https://image.winudf.com/v2/image1/ZGV2LmVycm9yd2FsbDEuYmFkcm94YXJfc2NyZWVuXzBfMTU3Njg4MDMxNl8wMDk/screen-0.jpg?fakeurl=1&type=.jpg`}
                          alt={movie.title}
                          width="100%"
                        />
                      )}
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
                            aria-label={`open ${movie.title} details`}
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
                  </motion.div>
                </GridListTile>
              ))}
            </GridList>
          </Grid>

          {page >= 1 ? (
            <Grid container className={classes.paginationGrid}>
              <Pagination
                count={totalPages}
                color="primary"
                page={page}
                onChange={handleChange}
              />
            </Grid>
          ) : (
            <></>
          )}
        </>
      );
    } else {
      return (
        <Grid className={classes.circularProgress}>
          <CircularProgress size={100} color="primary" />
        </Grid>
      );
    }
  };
  return (
    <Grid
      className={clsx(classes.content, {
        [classes.contentOpen]: open,
      })}
    >
      {renderMovies()}
      {isOpen ? (
        <MovieDetail
          isOpen={isOpen}
          handleClose={handleClose}
          movieId={movieId}
        />
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ByGenre;
