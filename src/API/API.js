import { API_KEY_MOVIE, API_URL_MOVIE, SEARCH_BASE_URL, POPULAR_BASE_URL } from "../config/config";

const defaultConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const apiSettings = {
    fetchMovies: async (searchTerm, page) => {
      const endpoint = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
      return await (await fetch(endpoint)).json();
    },
    fetchMovie: async (movieId) => {
      const endpoint = `${API_URL_MOVIE}movie/${movieId}?api_key=${API_KEY_MOVIE}`;
      return await (await fetch(endpoint)).json();
    },
    fetchCredits: async (movieId) => {
      const creditsEndpoint = `${API_URL_MOVIE}movie/${movieId}/credits?api_key=${API_URL_MOVIE}`;
      return await (await fetch(creditsEndpoint)).json();
    },
  };
  
  export default apiSettings;

  