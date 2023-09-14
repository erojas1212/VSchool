import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const context = useContext(ThemeContext);

  const navbarClass = context.color === "dark" ? "navbar-dark" : "navbar-light";

  return (
    <div className={`navbar ${navbarClass}`} id="navbar-content">
      <h2>Home</h2>
      <h2>About</h2>
      <h2>Contact</h2>
    </div>
  );
};

export default Navbar;
