import Movie from "./Movie";

export default function MovieList({ movies, onSelect }) {
  return (
    <ul className="list list-movies">
      {movies?.length ? (
        movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} onSelect={onSelect} />
        ))
      ) : (
        <p>No movies found</p>
      )}
    </ul>
  );
}
