import axios from "axios"

import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";


//Home Page
import HomePage from "./pages/home.page";
import Movie from "./pages/movie.page";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plays from "./pages/Plays.page";

// Axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path ="/" exact component={HomePage} />
      <DefaultHOC path ="/plays" exact component={Plays} />
      <MovieHOC path ="/movie/:id" exact component={Movie} />
    </>
  );
}

export default App;
