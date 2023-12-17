import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Login/Home/Home";
import Login from "../pages/Login/Login";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "login",
    element: <Login></Login>,
  },
]);
