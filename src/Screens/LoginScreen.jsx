import React, { useState } from "react";
import "./LoginScreen.css";
import { SignUpScreen } from "./SignUpScreen";
export const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt="netflix"
        />
        <button onClick={() => setSignIn(true)} className="loginscreen_button">
          Sign in
        </button>
        <div className="loginscreen_gradietn" />
        {signIn ? (
          <SignUpScreen />
        ) : (
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
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="button_started"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          </div>
        )}
      </div>
    </div>
  );
};
