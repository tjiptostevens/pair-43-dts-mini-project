// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "5c494b56b3fb6ac9c38682f802584590";
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// const TV_SERIES_DETAIL = `${API_URL}tv/`;
const POPULAR_BASE_URL_INA = `${API_URL}movie/popular?api_key=${API_KEY}&with_original_language=id`;


export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  POPULAR_BASE_URL_INA
};