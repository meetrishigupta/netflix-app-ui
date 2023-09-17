import React, { useState } from "react";
import "./LoginScreen.css";

import { NavLink } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
export const LoginScreen = () => {
  return (
    <div className="loginScreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt="netflix"
        />

        <div className="loginscreen_gradietn" />

        <div className="loginscreen_body">
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Join today. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen_input">
              <form>
                <input required type="email" placeholder="Email Address" />
                <NavLink to={"/home"}>
                  <button className="button_started">GET STARTED</button>
                </NavLink>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
