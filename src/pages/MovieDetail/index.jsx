import React, { useEffect, useState } from "react";
import {
  Container,
  Modal,
  CssBaseline,
  Paper,
  Typography,
  Grid,
  CircularProgress,
  List,
  ListItem,
  CardHeader,
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton
} from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from "./style";
import axios from "axios";

//TODO Create animations to details
// eslint-disable-next-line import/no-anonymous-default-export
const MovieDetail = (props) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const classes = useStyles();
  const [movieResult, setMovieResult] = useState({});
  const poster = `https://image.tmdb.org/t/p/w500${movieResult.poster_path}`;
  const [isBusy, setIsBusy] = useState(true);

  async function getMovieById() {
    setIsBusy(true);
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.movieId}?api_key=${apiKey}&language=en-US`
      )
      .then((movies) => {
        setMovieResult(movies.data);
        setIsBusy(false);
      })
      .catch((err) => {
        console.log("Error" + err);
        setIsBusy(false);
      });
  }

  function handleClick() {
    if (movieResult.homepage !== "") {
      window.open(movieResult.homepage, "_blank");
    }
  }
  useEffect(() => {
    getMovieById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isOpen]);

  return (
    <>
      {isBusy ? (
        <></>
      ) : (
        <Modal
          open={props.isOpen}
          onClose={props.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Container className={classes.principalGrid}>
            <CssBaseline />
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container>
                  <Grid xs={12} md={7} item className={classes.gridImage}>
                    <img
                      src={poster}
                      alt={movieResult.title}
                      className={classes.image}
                    />
                    <CircularProgress
                      variant="determinate"
                      color="secondary"
                      className={classes.circular}
                      value={movieResult.vote_average * 10}
                    />
                    <Typography
                      variant="subtitle2"
                      className={classes.circularText}
                    >
                      {movieResult.vote_average}
                    </Typography>
                    <IconButton
                      color='primary'
                      size='medium'
                      aria-label="close drawer"
                      onClick={props.handleClose}
                      className={classes.closeIcon}
                    >
                      <CancelIcon />
                    </IconButton>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    container
                    className={classes.gridRow}
                  >
                    <Grid item xs container direction="column">
                      <Grid item xs>
                        <Card className={classes.info}>
                          <CardHeader
                            className={classes.cardHeader}
                            title={
                              <Typography
                                gutterBottom
                                variant="h6"
                                color="primary"
                              >
                                {movieResult.title}
                              </Typography>
                            }
                            subheader={movieResult.tagline}
                          />
                          <CardContent>
                            <Typography
                              variant="body2"
                              className={classes.overview}
                              gutterBottom
                            >
                              <>
                                <strong>Release date: </strong>
                                {movieResult.release_date}
                              </>
                            </Typography>
                            <Typography
                              variant="body2"
                              paragraph
                              className={classes.overview}
                              gutterBottom
                            >
                              <>
                                <strong>Overview: </strong>
                                {movieResult.overview}
                              </>
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.overview}
                              gutterBottom
                            >
                              <>
                                <strong>Runtime: </strong>
                                {movieResult.runtime} min
                              </>
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.overview}
                              gutterBottom
                            >
                              <>
                                <strong>Budget: </strong>
                                {new Intl.NumberFormat("de-DE", {
                                  style: "currency",
                                  currency: "USD",
                                }).format(movieResult.budget)}
                              </>
                            </Typography>
                            <Typography
                              variant="body2"
                              className={classes.overview}
                              gutterBottom
                            >
                              <>
                                <strong>Revenue: </strong>
                                {new Intl.NumberFormat("de-DE", {
                                  style: "currency",
                                  currency: "USD",
                                }).format(movieResult.revenue)}
                              </>
                            </Typography>
                            <Grid item className={classes.gridGenres}>
                              <List className={classes.genres}>
                                {movieResult.genres.map((genre) => {
                                  return (
                                    <ListItem>
                                      <Typography
                                        variant="body2"
                                        color="primary"
                                      >
                                        {genre.name}
                                      </Typography>
                                    </ListItem>
                                  );
                                })}
                              </List>
                            </Grid>
                          </CardContent>
                          <CardActions className={classes.cardActions}>
                            <Button
                              size="small"
                              color="primary"
                              disabled={movieResult.homepage === ""}
                              onClick={handleClick}
                            >
                              Visit the web page
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default MovieDetail;
