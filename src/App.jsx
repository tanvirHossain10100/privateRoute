import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import { LoginForm } from "./componets/LoginForm/LoginForm";
import { Outlet } from "react-router";
import { Header } from "./componets/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
