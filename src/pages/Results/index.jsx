import React, { useEffect, useState, useContext } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton
} from "@material-ui/core";
import queryString from "query-string";
import MovieDetail from "../../pages/MovieDetail";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import useStyles from "./style";
import { OpenContext } from "../../components/Context";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ location }) => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => movieResults(state));
  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
  const [cols, setCols] = useState(0);
  const [movieId, setMovieId] = useState();
  const classes = useStyles();
  const { value } = useContext(OpenContext);
  const [open] = value;
  const [isOpen,setIsOpen] = useState()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !isLooked) {
      setCols(getViewport());
      setIsLooked(true);
      dispatch(searchMovie({ movieName }));
    }
    setIsLooked(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  useEffect(() => {
    window.addEventListener(
      "resize",
      function () {
        setCols(getViewport());
      },
      true
    );
  });

  const handleAddClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
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
    return 6;
  }

  const renderMovies = () => {
    if (movies) {
      return (
        <Grid className={classes.root}>
          <GridList className={classes.gridList} cols={cols}>
            {movies.map((movie, index) => (
              <GridListTile key={movie.id}>
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    src={`https://image.winudf.com/v2/image1/ZGV2LmVycm9yd2FsbDEuYmFkcm94YXJfc2NyZWVuXzBfMTU3Njg4MDMxNl8wMDk/screen-0.jpg?fakeurl=1&type=.jpg`}
                    alt={movie.title}
                  />
                )}
                <GridListTileBar
                  title={movie.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                  actionIcon={
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
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      );
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }
    return <></>;
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
