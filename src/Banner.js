import React from "react";
import "./Banner.css";
export const Banner = () => {
    function trunCate(string, n){
        return string?.length > n  ? string.substr(0,n-1)+ '...' : string;
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: 'url("https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_desc">{trunCate(`Netflix is an American subscription video on-demand over-the-top streaming service owned and operated by Netflix, Inc. The service primarily distributes films and television series produced by the media company of the same name from various genres, and it is available internationally in multiple languages.`, 150)}</h1>
      </div>
      <div className="banner--fadebutton" />
    </header>
  );
};
