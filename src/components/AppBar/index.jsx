import React, { useState, useContext, useEffect } from "react";
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
import HomeIcon from '@material-ui/icons/Home';
import { ReactComponent as VideoGrapher } from "../../icons/videographer.svg";
import { OpenContext } from "../../components/Context";
import { useHistory } from "react-router-dom";
import useStyles from "./style";
import NestedList from "../../pages/Home/list";

const AppB = () => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();
  const { value } = useContext(OpenContext);
  const [open, setOpen] = value;
  const history = useHistory();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  /*const handleClearTextClick = (event) => {
      setSearchText("");
    };*/

  function handleSearchTextClick() {
    history.push(`/results?movieName=${searchText}`);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const goHome = () => {
    history.push("/")
  }

  return (
    <>
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
          <IconButton onClick={goHome} edge="start" color="inherit">
            <HomeIcon />
          </IconButton>
          <TextField
            className={classes.textFieldSearch}
            value={searchText}
            placeholder="Search a movie..."
            onChange={handleSearchTextChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearchTextClick();
              }
            }}
          />
          <Button
            className={classes.searchButton}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSearchTextClick}
            startIcon={<SearchIcon />}
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
    </>
  );
};

export default AppB;
