import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

const API_KEY = "2563b319";

function MovieSearch() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [imgError, setImgError] = React.useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [favourites, setFavourites] = useState(() => {
        const saved = localStorage.getItem("favourites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query.length > 2) {
                setPage(1);
                fetchMovies(1);
            } else {
                setResults([]);
                setTotalResults(0);
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    useEffect(() => {
        if (query.length > 2) {
            fetchMovies(page);
        }
    }, [page]);

    const fetchMovies = async (pageNumber) => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=movie&page=${pageNumber}`
            );
            const data = await res.json();
            if (data.Search) {
                setResults(data.Search);
                setTotalResults(parseInt(data.totalResults));
            } else {
                setResults([]);
                setTotalResults(0);
            }
        } catch (error) {
            console.error("Błąd pobierania:", error);
        }
        setLoading(false);
    };

    const totalPages = Math.ceil(totalResults / 10);

    const isFavourite = (movie) =>
        favourites.some((fav) => fav.imdbID === movie.imdbID);

    const toggleFavourite = (movie) => {
        if (isFavourite(movie)) {
            setFavourites((prev) => prev.filter((fav) => fav.imdbID !== movie.imdbID));
        } else {
            setFavourites((prev) => [...prev, movie]);
        }
    };

    return (
        <div className="movie-search">
            <input
                type="text"
                placeholder="Wpisz tytuł filmu..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />

            {loading && <p className="loading-text">Szukanie filmów...</p>}

            <div className="movie-grid">
                {results.map((movie) => (
                    <MovieCard
                        key={movie.imdbID}
                        movie={movie}
                        isFavourite={favourites.some((fav) => fav.imdbID === movie.imdbID)}
                        toggleFavourite={toggleFavourite}
                    />
                ))}
            </div>

            {results.length > 0 && (
                <div className="pagination">
                    <button onClick={() => setPage(1)} disabled={page === 1}>
                        ⏮ Pierwsza
                    </button>

                    <button onClick={() => setPage((prev) => prev - 1)} disabled={page === 1}>
                        ◀ Poprzednia
                    </button>

                    <span>
                        Strona {page} z {totalPages}
                    </span>

                    <button
                        onClick={() => setPage((prev) => prev + 1)}
                        disabled={page >= totalPages}
                    >
                        Następna ▶
                    </button>

                    <button onClick={() => setPage(totalPages)} disabled={page >= totalPages}>
                        Ostatnia ⏭
                    </button>
                </div>
            )}
        </div>
    );
}

export default MovieSearch;
