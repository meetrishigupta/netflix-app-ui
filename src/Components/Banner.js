import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../API/request";
import axios from "../API/axios";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

export const Banner = () => {
  const driverObj = driver({
    // popoverClass: "driverjs-theme",
    showProgress: true,
    showButtons: [
      'next',
      'previous',
      
    ],
    steps: [
      {
        element: ".avatar-logo",
        popover: {
          title: "Manage your profile from here",
          side: "left",
          align: "start",
        },
      },
      {
        element: "#button_two",
        popover: {
          title: "Click to add your in wishlist",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: ".banner_button",
        popover: {
          title: "Play streaming from here",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: ".row_posters",
        popover: {
          title: "Find most epic movies and series",
          side: "left",
          align: "start",
        },
      },
      {
        element: ".nav-logo",
        popover: {
          title: "Click to refresh the homepage",
          side: "top",
          align: "start",
        },
      },
      {
        popover: {
          title: "Follow for More > Rishi Gupta",
        },
      },
    ],
  });

  driverObj.drive();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
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
          <button className="banner_button" id="button_two">
            My List
          </button>
        </div>
        <h1 className="banner_desc">{trunCate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadebutton" />
    </header>
  );
};
