import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data))
      .catch((error) => console.error("Failed to fetch directors:", error));
  }, []);



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((person) => (
          <article key={person.name}>
            <h2>{person.name}</h2>
            <ul>
              {person.movies.map((title, i) => (
                <li key={i}>{title}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
