import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Main = () => {
  const context = useContext(ThemeContext);

  const buttonText = context.color === "dark" ? "Light Mode" : "Dark Mode";

  const mainClass = context.color === "dark" ? "main-dark" : "main-light";

const buttonClass = context.color === "dark" ? "button-dark" : "button-light";

  const headingText =
    context.color === "dark"
      ? "Click the button to toggle the Light theme!"
      : "Click the button to toggle the Dark theme!";

  return (
    <div className={`content-wrapper ${mainClass}`} id="main-content">
      <h1>{headingText}</h1>
      <button onClick={context.toggleTheme} className={`btn-toggle ${buttonClass}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Main;
