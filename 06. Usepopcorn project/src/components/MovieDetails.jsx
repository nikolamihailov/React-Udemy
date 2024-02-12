import { useEffect, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";

export default function MovieDetails({
  watched,
  id,
  onCloseMovie,
  onAddToWatched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoadig, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const canAddToWatched = !watched.some((movie) => movie.imdbID === id);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newMovie = {
      imdbID: id,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
    };
    onAddToWatched(newMovie);
    onCloseMovie();
  };

  useEffect(() => {
    const getMovie = async function () {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=7561436b&i=${id}`
      ).catch(() => {
        throw new Error("Something went wrong with fetching movies");
      });
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMovie();
  }, [id]);

  useEffect(() => {
    if (!title) return;
    document.title = `MOVIE: ${title}`;

    return () => (document.title = "UsePopcorn");
  }, [title]);

  return (
    <div className="details">
      {isLoadig ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {canAddToWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have rated this movie: <span>⭐️</span>
                  {watched.find((m) => m.imdbID === id).userRating}/10
                </p>
              )}
            </div>

            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
