import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../API/request";
import axios from "../API/axios";
export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);

      let randomMovie;
      do {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        randomMovie = data.results[randomIndex];
      } while (randomMovie?.id === movie?.id && data.results.length > 1);

      setMovie(randomMovie);
    };

    fetchData();
  }, []);

  console.log(movie);

  function trunCate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
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
        <h1 className="banner_desc">{trunCate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadebutton" />
    </header>
  );
};
