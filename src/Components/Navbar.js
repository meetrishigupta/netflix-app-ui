import React, { useEffect, useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [show, handleshow] = useState(false);
  const transisitionforNavar = () => {
    if (window.scrollY >= 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transisitionforNavar);
    return () => {
      window.removeEventListener("scroll", transisitionforNavar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav-content">
        <img
          href="#"
          className="nav-logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        ></img>

        <img
          className="avatar-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        ></img>
      </div>
    </div>
  );
};
