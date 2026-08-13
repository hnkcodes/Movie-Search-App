import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  const date = new Date(movie.release_date).toLocaleDateString("en-US");
  return (
    <Link to={`/movie/${movie.id}`}>
      <li className="movie-list-item">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.title}</p>
        <p>{date}</p>
      </li>
    </Link>
  );
}
