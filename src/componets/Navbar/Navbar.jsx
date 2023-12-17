import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="nav">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/currentNews"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                NEWS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to="/abouts"
              >
                ABOUTUS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "white" : "black",

                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
                to="/login"
              >
                SINGUP
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
