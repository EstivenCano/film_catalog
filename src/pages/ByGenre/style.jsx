import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    paddingInline: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    marginTop: 70,
    marginBottom: 20,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentOpen: {
    flexGrow: 1,
    marginTop: 70,
    marginBottom: 20,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
    },
  },
  gridList: {
    "&::-webkit-scrollbar": {
      width: "0.4em",
      height: "0.6em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f0efff",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#3f51b5",
    },
  },
  title: {
    color: theme.palette.primary,
  },
  titleBar: {},
}));

export default useStyles;
