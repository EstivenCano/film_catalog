import { makeStyles } from "@material-ui/styles";

const centeredStyleObj = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default makeStyles({
  container: {
    marginLeft: 0,
    marginInline: 0,
    padding: 0,
    flexDirection: "column",
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: "column",
    marginLeft: 0,
    height: 120,
    padding: ".1rem",
    ...centeredStyleObj,
  },
  title: {
    fontSize: "2rem",
  },
  titleGridContainer: {
    ...centeredStyleObj,
  },
  textFieldSearch: {
    width: "90%",
  },
  searchButton: {
    marginLeft: ".5rem",
  },
  buttonsContainer: {
    marginTop: ".5rem",
  },
  movieIcon: {
    fontSize: "4rem",
  },
  gridContainer: {
    height: '100vh'
  }, 
  lateralCard: {
    display: 'flex', 
    flexDirection: 'column',
    alignItems:'center',
    marginTop: 0,
    justifyContent: 'flex-start',
    padding: 10,
    height: '100vh',
  },
  searchGrid : {
    ...centeredStyleObj,
    width: "100%",
    paddingInline: '50px'
  }
});

