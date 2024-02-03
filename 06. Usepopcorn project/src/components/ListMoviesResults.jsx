import { useState } from "react";
import MovieList from "./MovieList";

export default function ListMoviesResults() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList />}
    </div>
  );
}
