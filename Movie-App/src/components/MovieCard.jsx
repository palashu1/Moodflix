import React from "react";
import "../css/MovieCard.css";
import imageNotFound from "../assets/posterNotFound.png";
import { BASE_URL_IMAGE } from "../services/api.js";
import { useMovieDataContext } from "../context/MovieContext.jsx";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } =
    useMovieDataContext();

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            !movie.poster_path
              ? imageNotFound
              : `${BASE_URL_IMAGE}${movie.poster_path}`
          }
          alt=""
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>
            <FaHeart className={favorite ? "active" : ""} />
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]} </p>
      </div>
    </div>
  );
};
export default MovieCard;
