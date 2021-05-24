import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0),
      margin: "auto",
    },
    overflowY: "scroll",
    flexWrap: "nowrap",
    "&::-webkit-scrollbar": {
      width: "0.3em",
      height: "0.6em",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f0efff",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#3f51b5",
    },
    maxHeight: "95vh",
    padding: theme.spacing(0.5),
  },
  root: {
    [theme.breakpoints.up("md")]: {
      width: "80vh",
    },
    paddingBlock: theme.spacing(5),
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  info: {},
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overview: {
    textAlign: 'justify'
  },
  gridRow: {
    padding: theme.spacing(1),
  },
}));

export default useStyles;
