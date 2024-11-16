import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <MovieCard title={movie.title} id={movie.id} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;
