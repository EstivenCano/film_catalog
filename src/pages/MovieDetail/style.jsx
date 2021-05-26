import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0),
      margin: "auto",
      overflowY: "hidden",
    },
    maxHeight: "90vh",
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
  },
  principalGrid:{
    [theme.breakpoints.up("sm")]: {
      width: "45vw",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    [theme.breakpoints.up("sm")]: {
      width: "620px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    maxHeight: '88.5vh',
    [theme.breakpoints.up("sm")]: {
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
    },
  },
  overview: {
    textAlign: 'justify'
  },
  gridRow: {
    padding: theme.spacing(1),
  },
  gridImage:{
    position: 'relative',
    display: 'block',
    maxHeight: '90vh',
  },
  circular:{
    position:'absolute',
    bottom: 20,
    right: 10
  },
  circularText:{
    position:'absolute',
    bottom: 28,
    right: 20,
    color: 'white'
  },
  genres:{
    display: 'flex',
    flexDirection: 'row',
  },
  gridGenres:{
    width: '100%',
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
    overflowX: "scroll",
  },
  cardActions:{
    display: 'flex',
    flexDirection: 'row', 
    alignSelf: 'flex-end'
  },
  closeIcon:{
    position:'absolute',
    top: 0,
    left: 10
  }
}));

export default useStyles;
