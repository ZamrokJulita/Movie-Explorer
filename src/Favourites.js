import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

function Favourites() {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const removeFavourite = (movie) => {
    setFavourites((prev) => prev.filter((fav) => fav.imdbID !== movie.imdbID));
  };

  return (
    <div className="favourites">
      {favourites.length === 0 && (
        <p className="no-results">Nie masz jeszcze ulubionych filmów.</p>
      )}

      <div className="movie-grid">
        {favourites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavourite={true}
            toggleFavourite={removeFavourite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
