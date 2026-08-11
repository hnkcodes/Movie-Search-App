import { useLoaderData } from "react-router-dom";
import MovieItem from "./MovieListItem";

export default function SimilarMovie() {
  const { similar } = useLoaderData();

  return (
    <>
      <ul className="list-box">
        {similar.results.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </ul>
    </>
  );
}
