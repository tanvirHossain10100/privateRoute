import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Login/Home/Home";
import Login from "../pages/Login/Login";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <home></home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
