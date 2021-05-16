import React, { useState } from "react";
import {
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { MovieIcon, SearchIcon } from "../../icons";
import { ReactComponent as VideoGrapher } from "../../icons/videographer.svg";

import useStyles from "./style";
import NestedList from "./list";
import ByCategory from "./category";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  /*const handleClearTextClick = (event) => {
    setSearchText("");
  };*/
  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Grid container className={classes.principalContainer}>
      <Hidden smDown>
        <Grid className={classes.gridContainer} item sm={2} md={2}>
          <Card className={classes.lateralCard}>
            <Grid justify="center">
              <VideoGrapher width="12vw" height="15vh" />
              <Typography
                className={classes.title}
                variant="h4"
                color="primary"
              >
                Film Catalog
              </Typography>
            </Grid>
            <NestedList />
          </Card>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={12} md={10}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer}>
            <Grid className={classes.searchGrid}>
              <IconButton aria-label="delete">
                <MovieIcon />
              </IconButton>
              <TextField
                className={classes.textFieldSearch}
                value={searchText}
                placeholder="Search a movie..."
                onChange={handleSearchTextChange}
              />
              <Grid className={classes.buttonsContainer}>
                <Button
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                  startIcon={<SearchIcon />}
                  onClick={handleSearchTextClick}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card>
          <br />
          <ByCategory category="popular" />
          <br />
          <ByCategory category="upcoming" />
          <br />
          <ByCategory category="top_rated" />
          <br />
        </Card>
      </Grid>
    </Grid>
  );
};
