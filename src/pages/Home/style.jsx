import { makeStyles } from '@material-ui/core/styles';

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    flexDirection: "column",
    ...centeredStyleObj,
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  },
  contentOpen: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
    [theme.breakpoints.down("sm")]:{
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0
    },
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  cardContainer: {
    ...centeredStyleObj,
    [theme.breakpoints.up("sm")]:{
      paddingBlock: 30,
      height: '5vh',
    },
    height: '10vh',
    flexDirection: "column",
  },
  title: {
    fontSize: "22px",
    fontWeight: '500', 
    lineHeight: '40px',
    marginLeft: '10px'
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: "1rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
  movieIcon: {
    fontSize: "4rem",
  },
  gridContainer: {
   display: "flex",
   flexDirection: "column",
  },
  principalContainer:{
    height: "100%"
  },
  moviesCard:{
    overflowY: 'scroll',
    height: '93vh',
    marginTop: '7vh',
    paddingInline: '10px',
    '&::-webkit-scrollbar': {
      width: '0.5em'
    },
    '&::-webkit-scrollbar-track': {
      background: "#f0efff"
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#3f51b5',
    },
  },
  lateralCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 0,
    justifyContent: "flex-start",
    padding: 10,
    height: "100%",
  },
  searchGrid: {
    ...centeredStyleObj,
    [theme.breakpoints.down("sm")]:{
      padding: 15
    },
    width: "100%",
    paddingInline: "50px",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

export default useStyles