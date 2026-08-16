import { useState } from "react";
import {
  mood_option,
  runtime_option,
  review_option,
  releaseDate_option,
} from "../util/search-options";

import { options } from "../util/api-request-options";
import SearchItem from "./SearchItem";

export default function Search({ onSearch, setError }) {
  const [isLoading, setIsLoading] = useState(false);

  const [inputs, setInputs] = useState({
    mood: "",
    runtime: "",
    review: "",
    releaseDate: "",
  });

  function handleOption(input, type) {
    setInputs((prevState) => {
      const newState = { ...prevState, [type]: input };
      return newState;
    });
  }

  async function handleSearch() {
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&sort_by=popularity.desc${inputs.mood}${inputs.runtime}${inputs.review}${inputs.releaseDate}`;

    try {
      setIsLoading(true);
      const resData = await fetch(url, options);
      if (!resData.ok) throw new Error("Failed to Fetch Data");
      const data = await resData.json();
      onSearch(data.results);
    } catch (err) {
      setError({ message: err.message || "Could not fetch Movies" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <h2 className="page-headline">
        Search for today's movie based on your mood!
      </h2>
      <SearchItem
        list={mood_option}
        type="mood"
        title="Mood"
        handleOption={handleOption}
        inputs={inputs}
      />
      <SearchItem
        list={runtime_option}
        type="runtime"
        title="Runtime"
        handleOption={handleOption}
        inputs={inputs}
      />
      <SearchItem
        list={review_option}
        type="review"
        title="Review"
        handleOption={handleOption}
        inputs={inputs}
      />
      <SearchItem
        list={releaseDate_option}
        type="releaseDate"
        title="Release Date"
        handleOption={handleOption}
        inputs={inputs}
      />
      <div className="button-container">
        <button
          onClick={handleSearch}
          className="act-button search-button"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Discover"}
        </button>
      </div>
    </>
  );
}
