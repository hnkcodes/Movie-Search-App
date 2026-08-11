import { useSelector } from "react-redux";
import MovieItem from "./MovieListItem";
import { useEffect } from "react";

export default function Bookmark() {
  const mark = useSelector((state) => state.mark);
  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(mark));
  }, [mark]);

  return (
    <div className="bookmark-container">
      <ul className="list-box">
        {mark.map((item) => (
          <MovieItem key={item.id} movie={item} bookmark />
        ))}
      </ul>
    </div>
  );
}
