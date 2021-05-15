import React from "react";
import { Card, Grid, Typography, Button, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { withRouter } from "react-router-dom";

import style from "./style";

const MovieResult = ({
  title,
  release_date,
  poster_path,
  id,
  vote_average,
  vote_count,
  history,
}) => {
  const classes = style();

  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const handleSeeMovieClick = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          {poster_path !== null ? (
            <img src={poster} alt={title} className={classes.poster} />
          ) : (
            <img
              src={
                "https://www.carnival.com/_ui/responsive/ccl/assets/images/notfound_placeholder.svg"
              }
              alt={title}
              className={classes.poster}
            />
          )}
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{title}</Typography>
          <Typography>
            <strong>Release date:</strong> {release_date}
          </Typography>
          <Box>
            <Rating
              name="customized-10"
              defaultValue={vote_average}
              max={10}
              precision={0.1}
              readOnly
            />
          </Box>
          <Typography>
            <strong>Vote count:</strong> {vote_count}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeMovieClick}
          >
            VER MAS
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default withRouter(MovieResult);
