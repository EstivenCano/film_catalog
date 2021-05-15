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
      paddingBlock: 30
    },
    flexDirection: "column"
  },
  title: {
    fontSize: "2vw",
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
    height: "100vh",
  },
  lateralCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 0,
    justifyContent: "flex-start",
    padding: 10,
    height: "100vh",
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