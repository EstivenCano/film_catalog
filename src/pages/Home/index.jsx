import React, { useState } from "react";
import clsx from "clsx";
import {
  AppBar,
  Typography,
  Card,
  Grid,
  Drawer,
  TextField,
  Button,
  Toolbar,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { SearchIcon } from "../../icons";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { ReactComponent as VideoGrapher } from "../../icons/videographer.svg";

import useStyles from "./style";
import NestedList from "./list";
import ByCategory from "../../components/ByCategory";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ history }) => {
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container className={classes.principalContainer}>
      <AppBar
        position="fixed"
        className={clsx(classes.AppBar, {
          [classes.appBarShift]: open,
        })}
        color="inherit"
      >
        <Toolbar>
          {!open ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleDrawerClose}
              edge="start"
              color="inherit"
            >
              <ChevronLeftIcon />
            </IconButton>
          )}

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
            size="small"
            startIcon={<SearchIcon />}
            onClick={handleSearchTextClick}
          >
            <Hidden smDown>Search</Hidden>
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Grid className={classes.gridContainer} item sm={12} md={12}>
          <Card className={classes.lateralCard}>
            <Grid>
              <VideoGrapher width="200px" height="105px" />
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
      </Drawer>
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
