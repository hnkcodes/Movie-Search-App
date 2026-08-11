import Search from "../components/Search";
import { useState } from "react";
import MovieItem from "../components/MovieListItem";

export default function HomePage() {
  const [searchData, setSearchData] = useState(null);

  return (
    <>
      <Search onSearch={setSearchData} />

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
