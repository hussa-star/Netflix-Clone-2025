
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", 
  // params: {
  //   api_key: process.env.REACT_APP_TMDB_API_KEY, // Access API key from .env file
  //   language: "en-US", // Default language for the API
  // },
});

export default instance; 
