import {Link} from 'react-router-dom';
import NavBar from './NavBar';

function MovieCard({ id, title }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </article>
  );
}


export default MovieCard;