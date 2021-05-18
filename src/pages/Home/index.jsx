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
import { SearchIcon } from "../../icons";
import MenuIcon from "@material-ui/icons/Menu";

import { ReactComponent as VideoGrapher } from "../../icons/videographer.svg";

import useStyles from "./style";
import NestedList from "./list";
import ByCategory from "../../components/ByCategory";

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
            <Grid>
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
              <IconButton aria-label="menu">
                <MenuIcon />
              </IconButton>
              <TextField
                className={classes.textFieldSearch}
                value={searchText}
                placeholder="Search a movie..."
                onChange={handleSearchTextChange}
              />
              <Button
                className={classes.searchButton}
                variant="contained"
                color="primary"
                size='small'
                startIcon={<SearchIcon />}
                onClick={handleSearchTextClick}
              >
                <Hidden smDown>Search</Hidden>
              </Button>
            </Grid>
          </Grid>
        </Card>
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
