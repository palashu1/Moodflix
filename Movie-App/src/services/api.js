const API_KEY = "2ab8699853fa1ed7ae75133d42b85ee9";
const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/w500";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );
  const data = await response.json();
  return data.results;
};
