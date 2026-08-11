import { Link, useLoaderData } from "react-router-dom";
import { toggleClip } from "../store/markSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function MovieDetail({ bookmark }) {
  const mark = useSelector((state) => state.mark);

  useEffect(() => {
    localStorage.setItem("bookmark", JSON.stringify(mark));
  }, [mark]);

  const dispatch = useDispatch();
  const handleClip = function (data) {
    dispatch(toggleClip(data));
    localStorage.setItem("bookmark", JSON.stringify(data));
  };
  const data = useLoaderData();

  const clipped = mark.find((item) => item.id === data.id);

  const mainCast = data.credits.cast.slice(0, 5);
  const director = data.credits.crew.filter((item) => item.job === "Director");
  const screenplay = data.credits.crew.filter(
    (item) => item.job === "Writer" || item.job === "Screenplay",
  );

  const streaming = data["watch/providers"]?.results?.IE?.flatrate ?? [];
  const rental = data["watch/providers"]?.results?.IE?.rent ?? [];

  const date = new Date(data.release_date).toLocaleDateString("en-US");

  return (
    <div>
      <Link to="/">
        <button className="act-button go-back-button">Go Home</button>
      </Link>

      <h3 className="movie-item-title">{data.title}</h3>
      <div className="movie-item-detailed-info">
        <p>Release on {date}</p>
        <p>{data.runtime} min</p>
      </div>
      <div className="movie-item-container">
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
        </div>
        <div className="movie-item-right-container">
          <div>
            <h4>Overview</h4>
            <p>{data.overview}</p>
          </div>
          <div>
            <h4>Main Cast</h4>
            <ul>
              {mainCast.map((item) => (
                <li key={item.id}>
                  {item.name}{" "}
                  <span className="movie-item-play-as">
                    as {item.character}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Director</h4>
            <ul>
              {director.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Screen Play</h4>
            <ul>
              {screenplay.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Streaming ({streaming.length})</h4>
            <ul>
              {streaming.map((item) => (
                <li>{item["provider_name"]}</li>
              ))}
            </ul>
          </div>
          <div>
            {rental.length > 0 && (
              <>
                <h4>Rental ({rental.length})</h4>
                <ul>
                  {rental.map((item) => (
                    <li>{item["provider_name"]}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <div>
            <h4>Average Vote</h4>
            <p>Over {Math.floor(data.vote_average)}</p>
          </div>

          <button
            onClick={() => handleClip(data)}
            className="act-button clip-button"
          >
            {clipped ? "Unclip" : "Clip!"}
          </button>
        </div>
      </div>
    </div>
  );
}
