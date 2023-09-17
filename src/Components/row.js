import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../API/axios";
export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movie);
  return (
    <div className="row">
      <h2 className="title-category">{title}</h2>
      <div className="row_posters">
        {movie.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row_poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};
