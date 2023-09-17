import React, { useEffect } from "react";
import { HomeScreen } from "./Screens/HomeScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import "./index.css";
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "@firebase/auth";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //Logged In
        console.log(userAuth);
      } else {
        //Logged Out
      }
    });
    return unsubsribe;
  }, []);
  const user = {
    name: "rishi",
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />,
    },
    {
      path: "*",
      element: <h1>404</h1>,
    },
  ]);
  return (
    <div className="App">
      {!user ? (
        <LoginScreen />
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
    </div>
  );
}

export default App;
