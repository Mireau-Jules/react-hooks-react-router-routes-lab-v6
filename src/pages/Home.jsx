import { useEffect, useState } from "react";
import NavBar from "../components/NavBar.jsx";
import MovieCard from "../components/MovieCard.jsx";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header><NavBar /></header>
      <main>
        <h1>Home Page</h1>
        <section>
          {movies.map((movie) => (
  <MovieCard key={movie.id} id={movie.id} title={movie.title} />
))
}
        </section>
      </main>
    </>
  );
}

export default Home;
