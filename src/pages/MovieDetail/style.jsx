import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0),
      margin: "auto",
      overflowY: "hidden"
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
    [theme.breakpoints.down("sm")]:{
      width: "450px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "800px",
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
    }
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
    color: 'white',
    position:'absolute',
    bottom: 6,
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
  },
  textDiv: {
    position:'absolute',
    display: 'flex',
    flexDirection: 'row',
    background: 'black',
    borderRadius: '20px',
    width: '34px',
    height: '34px',
    bottom: 23,
    right: 13,
    justifyContent: 'center', 
    alignSelf: 'center'
  }
}));

export default useStyles;
