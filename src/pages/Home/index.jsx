import React, { useState } from "react";
import { Typography, Card, Grid, TextField, Button } from "@material-ui/core";

import { MovieIcon, SearchIcon } from "../../icons";
import { ReactComponent as VideoGrapher } from "../../icons/videographer.svg";

import styles from "./style";
import NestedList from "./list";
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const classes = styles();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClearTextClick = (event) => {
    setSearchText("");
  };
  const handleSearchTextClick = (event) => {
    history.push(`/results?movieName=${searchText}`);
  };

  return (
    <Grid container>
      <Grid className={classes.gridContainer} item xs={2}>
        <Card className={classes.lateralCard}>
          <Grid justify="center">
            <VideoGrapher width="10vw" height="15vh" />
            <Typography variant="h4" color="primary">
              Film Catalog
            </Typography>
          </Grid>
          <NestedList />
        </Card>
      </Grid>
      <Grid item xs={10}>
        <Card className={classes.cardContainer}>
          <Grid container className={classes.titleGridContainer}>
            <Grid className={classes.searchGrid}>
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
                  size="large"
                  onClick={handleSearchTextClick}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};
