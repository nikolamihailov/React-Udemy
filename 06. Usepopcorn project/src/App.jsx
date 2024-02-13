import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/NavBar";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Box from "./components/Box";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";
import { useEffect } from "react";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useKey } from "./hooks/useKey";

const API_KEY = "7561436b";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [watched, setWatched] = useLocalStorage([], "watched");

  const handleMovieSelect = (id) =>
    setSelectedMovieId((mId) => (mId === id ? null : id));

  const handleCloseMovie = () => setSelectedMovieId(null);

  const handleAddToWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };

  const handleDeleteMovieFromWatched = (id) => {
    setWatched((movies) => movies.filter((m) => m.imdbID !== id));
  };

  useKey("Escape", handleCloseMovie);

  useEffect(() => {
    const controller = new AbortController();
    const getMovies = async function () {
      try {
        setError("");
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`,
          { signal: controller.signal }
        ).catch(() => {
          throw new Error("Something went wrong with fetching movies");
        });
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (!searchQuery.length) {
      setError("");
      setMovies([]);
    }
    handleCloseMovie();
    getMovies();

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <>
      <Navbar>
        <Search query={searchQuery} setQuery={setSearchQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelect={handleMovieSelect} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedMovieId ? (
            <MovieDetails
              id={selectedMovieId}
              onCloseMovie={handleCloseMovie}
              onAddToWatched={handleAddToWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDelete={handleDeleteMovieFromWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
