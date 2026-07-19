import React from "react";
import { HomeScreen } from "./Screens/HomeScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
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
