import ListMoviesWatched from "./ListMovieWatched";
import ListMoviesResults from "./ListMoviesResults";

export default function Main() {
  return (
    <main className="main">
      <ListMoviesResults />
      <ListMoviesWatched />
    </main>
  );
}
