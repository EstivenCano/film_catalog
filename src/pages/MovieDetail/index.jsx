import React, { useEffect, useState } from "react";
import {
  Container,
  Modal,
  CssBaseline,
  Paper,
  Typography,
  Grid,
} from "@material-ui/core";
import useStyles from "./style";
import axios from "axios";

//TODO Create a card to MovieDetails
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
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.root}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container>
                  <Grid xs={12} md={7} item>
                    <img
                      src={poster}
                      alt={movieResult.title}
                      className={classes.image}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={5}
                    container
                    className={classes.gridRow}
                  >
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs className={classes.info}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          color="primary"
                          className={classes.title}
                        >
                          {movieResult.title}
                        </Typography>
                        <Typography variant="body2" className={classes.overview} gutterBottom>
                          {movieResult.overview}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body2"
                          style={{ cursor: "pointer" }}
                        >
                          Remove
                        </Typography>
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
