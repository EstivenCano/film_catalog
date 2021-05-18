import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      marginTop: "10px",
      paddingInline: "10px",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: "nowrap",
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
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
    },
    title: {
      color: theme.palette.primary,
    },
    titleBar: {},
  }));

  export default useStyles