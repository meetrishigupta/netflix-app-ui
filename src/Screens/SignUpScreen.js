import React, { useRef } from "react";
import "./Signupscreen.css";
import { auth } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
export const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passRef.current.value
    )
      .then((loginUser) => {
        console.log(loginUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passRef} placeholder="Password" type="password" />
        <button onClick={SignIn}>Sign In</button>
        <h3>
          <span className="signuptext_gray">New to Netflix? </span>
          <span className="signuptext_link" onClick={register}>
            Sign up now.
          </span>
        </h3>
      </form>
    </div>
  );
};
