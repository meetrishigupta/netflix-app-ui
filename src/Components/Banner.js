import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../API/request";
import axios from "../API/axios";

export const Banner = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(requests.fetchNetflixOriginals);

        if (data.results && data.results.length > 0) {
          setMovie((prevMovie) => {
            let randomMovie;

            do {
              const randomIndex = Math.floor(
                Math.random() * data.results.length,
              );
              randomMovie = data.results[randomIndex];
            } while (
              prevMovie &&
              randomMovie.id === prevMovie.id &&
              data.results.length > 1
            );

            return randomMovie;
          });
        }
      } catch (error) {
        console.error("Failed to fetch banner movie:", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: movie?.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
          : "none",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadebutton" />
    </header>
  );
};

export default Banner;
npm