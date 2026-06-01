import React, { createContext, useContext, useEffect, useState } from "react";

const MovieDataContext = createContext();

export const useMovieDataContext = () => useContext(MovieDataContext);

export const MovieContext = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movies) => {
    setFavorites((prev) => [...prev, movies]);
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
  return (
    <div>
      <MovieDataContext.Provider value={value}>
        {children}
      </MovieDataContext.Provider>
    </div>
  );
};
