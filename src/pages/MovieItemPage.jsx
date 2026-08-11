import MovieDetail from "../components/MovieDetail";
import SimilarMovie from "../components/SimilarMovie";
import { options } from "../util/api-request-options";

export default function MovieItemPage() {
  return (
    <>
      <MovieDetail />
      <h4 className="page-headline">Similar Movie</h4>
      <SimilarMovie />
    </>
  );
}

export const loader = async function ({ params }) {
  const id = params.movieId;
  const resData = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,watch/providers,similar,reviews`,
    options,
  );

  if (!resData.ok) {
    throw new Response("Could not fetch movies.", {
      status: resData.status,
    });
  }

  const data = await resData.json();
  return data;
};
