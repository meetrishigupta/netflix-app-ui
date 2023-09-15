import React from "react";
import "./HomeScreen.css";
import { Banner } from "./Banner";
import requests from "./request";
import { Row } from "./row";
export const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Banner />
     
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />{" "}
       <Row
        title="Trending now"
        fetchUrl={requests.fetchTrending}
     
      />
      <Row
        title="Action movies"
        fetchUrl={requests.fetchActionMovies}
  
      />{" "}
      <Row
        title="Romance movies"
        fetchUrl={requests.fetchRomanceMovies}
        
      />{" "}
      <Row
        title="Comedy movies"
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        
      />
      <Row
        title="Horror movies"
        fetchUrl={requests.fetchHorrorMovies}
        
      />
    </div>
  );
};
