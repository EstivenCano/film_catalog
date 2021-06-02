import React, { useContext } from "react";
import clsx from "clsx";
import {
  Typography,
  Card,
  Grid,
} from "@material-ui/core";

import { OpenContext } from "../../components/Context";

import useStyles from "./style";
import ByCategory from "../../components/ByCategory";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const classes = useStyles();
  const { value } = useContext(OpenContext);
  const [open] = value;


  return (
    <Grid container className={classes.principalContainer}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        className={clsx(classes.content, {
          [classes.contentOpen]: open,
        })}
      >
        <Card className={classes.moviesCard}>
          <br />
          <Typography className={classes.title} variant="h4" color="primary">
            Popular
          </Typography>
          <ByCategory category="popular" />
          <br />
          <Typography className={classes.title} variant="h4" color="primary">
            Now playing
          </Typography>
          <ByCategory category="now_playing" />
          <br />
          <Typography className={classes.title} variant="h4" color="primary">
            Top rated
          </Typography>
          <ByCategory category="top_rated" />
          <br />
        </Card>
      </Grid>
    </Grid>
  );
};
