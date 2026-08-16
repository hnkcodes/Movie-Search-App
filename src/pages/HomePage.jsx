import Search from "../components/Search";
import { useState } from "react";
import MovieItem from "../components/MovieListItem";
import ErrorPage from "./ErrorPage";

export default function HomePage() {
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState(null);

  return (
    <>
      <Search onSearch={setSearchData} error={error} setError={setError} />
      {error && <p>{error.message}</p>}
      {searchData && (
        <>
          <h4 className="page-headline">You might want to see...</h4>
          <ul className="list-box">
            {searchData.map((item) => (
              <MovieItem key={item.id} movie={item} />
            ))}
          </ul>
        </>
      )}
    </>
  );
}
