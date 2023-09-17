import React, { useState } from "react";
import "./LoginScreen.css";
import { NavLink } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";

export const LoginScreen = () => {
  const [email, setEmail] = useState(""); // State to track email input value

  // Function to handle changes in the email input
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to check if the email input is filled
  const isEmailFilled = email.trim() !== "";

  // Function to handle the "GET STARTED" button click
  const handleGetStartedClick = () => {
    if (!isEmailFilled) {
      // Display an alert if email is not filled
      alert("Please enter your email address.");
    }
  };

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
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={handleEmailChange} // Handle input changes
                />
                <NavLink to={isEmailFilled ? "/home" : ""}>
                  {/* Disable the NavLink when email is not filled */}
                  <button
                    className="button_started"
                    disabled={!isEmailFilled}
                    onClick={handleGetStartedClick} // Handle button click
                  >
                    GET STARTED
                  </button>
                </NavLink>
              </form>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};
