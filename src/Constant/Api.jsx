//Axios api hub
import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3/"
const DisneyApiKey =import.meta.env.VITE_TMDB_API_KEY
// console.log(DisneyApiKey);
//get trending 
// const getTrendingVideos =axios.get(
//     movieBaseUrl+"trending/movie/day?api_key="+"13ce242017761df8ff5a15e4f868f901"
// )

export default{getTrendingVideos}