import { useQuery } from "@tanstack/react-query";
import MovieItem from "./MovieListItem";
import { options } from "../util/api-request-options";

export default function MovieList({ num, queryKey, title }) {
  const {
    data = [],
    isError,
    error,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchFn(num),
  });

  if (isError)
    return (
      <>
        <p>Something went wrong</p>
        <p>{error.message || "Please try again"}</p>
      </>
    );

  return (
    <div>
      <h4 className="movie-list-title">{title}</h4>
      <ul className="list-box">
        {data.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </ul>
    </div>
  );
}

const fetchFn = async function (num) {
  const resData = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${num}`,
    options,
  );

  if (!resData.ok) {
    throw new Error(`Failed to fetch movies: ${resData.status}`);
  }

  const data = await resData.json();
  return data.results;
};
