import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Login/Home/Home";
import Login from "../pages/Login/Login";
import App from "../App";
import { AboutUs } from "../componets/AboutUs/AboutUs";
import { Products } from "../componets/Products/Products";
import { Blog } from "../componets/Blog/Blog";
import { CurrentNews } from "../componets/CurrentNews/CurrentNews";

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
        path: "/currentNews",
        element: <CurrentNews></CurrentNews>,
        loader: () => {
          return fetch(
            "https://newsapi.org/v2/everything?q=tesla&from=2023-11-17&sortBy=publishedAt&apiKey=a0ce64c4a9894ab29f7e86c8c63091f4"
          );
        },
      },
      {
        path: "/abouts",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
