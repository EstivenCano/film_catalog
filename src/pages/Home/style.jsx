import { makeStyles } from '@material-ui/core/styles';

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    flexDirection: "column",
    ...centeredStyleObj,
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
    fontSize: "25px",
    fontWeight: '500', 
    lineHeight: '40px',
    textAlign: 'center'
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
    height: '85vh',
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
}));

export default useStyles