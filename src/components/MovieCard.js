import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieCard({ movie, isFavourite, toggleFavourite }) {
  const [imgError, setImgError] = useState(false);

  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <div className="movie-card">
      <div className="poster-wrapper" style={{ position: "relative" }}>
        {!imgError && hasPoster ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="movie-poster"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="no-poster-placeholder">
            Brak plakatu
          </div>
        )}

        <button
          onClick={() => toggleFavourite(movie)}
          aria-label={isFavourite ? "Usuń z ulubionych" : "Dodaj do ulubionych"}
          className="favorite-icon"
        >
          {isFavourite ? (
            <FaHeart color="#e91e63" size={24} />
          ) : (
            <FaRegHeart color="#e91e63" size={24} />
          )}
        </button>
      </div>

      <h4 className="movie-title">{movie.Title}</h4>
      <p className="movie-year">{movie.Year}</p>
    </div>
  );
}

export default MovieCard;
