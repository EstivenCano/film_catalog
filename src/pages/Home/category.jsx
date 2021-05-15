import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Container,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  StarBorderIcon,
} from "@material-ui/core";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
const ByCategory = (props) => {
  const [movies, setMovies] = useState();
  const apiKey = process.env.REACT_APP_API_KEY
  const classes = useStyles();
  const [isLooked, setIsLooked] = useState(false);

 async function getMovies() {
   await axios.get(`https://api.themoviedb.org/3/movie/${props.category}?api_key=${apiKey}&language=en-US`).
   then((movies)=>{
     console.log(movies);
     setMovies(movies.data.results)
   })
    
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if(!movies){
      getMovies()
    }
  });

  //TODO Implement list for each categories
  const renderMovies = () => {
    if (movies) {
      return movies.map((value, index) => (
        <Typography key={index}>
          {value.title}
        </Typography>
      ));
    } 
    return <></>;
  };
  return <Container>{renderMovies()}</Container>;
  
};
export default ByCategory;
