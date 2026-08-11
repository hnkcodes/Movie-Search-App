import MovieList from "../components/MovieList";

export default function MoviePage() {
  return (
    <>
      <h3 className="page-headline">Current Trend</h3>
      <MovieList num="35" queryKey="comedy" title="Comedy" />
      <MovieList num="9648" queryKey="mystery" title="Mystery" />
      <MovieList num="18" queryKey="drama" title="Drama" />
      <MovieList num="10749" queryKey="romance" title="Romance" />
    </>
  );
}
