import React, { useEffect } from "react";
import { HomeScreen } from "./Screens/HomeScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import "./index.css";
import { auth } from "./firebaseconfig";
import { onAuthStateChanged } from "@firebase/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./Components/Navbar";

function App() {
  const user = null;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginScreen />,
    },
    {
      path: "/home",
      element: <HomeScreen />,
    },
    { errorElement: <h1>404</h1> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
