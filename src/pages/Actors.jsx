import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Directors from "./Directors";

function Actors() {
const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((res) => res.json())
      .then((data) => setActors(data))
      .catch((error) => console.error("Failed to fetch actors:", error));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((person) => (
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

export default Actors;
