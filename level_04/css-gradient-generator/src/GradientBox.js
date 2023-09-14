import React, { useState, useEffect } from "react";
import "./Style.css";

const GradientBox = () => {
  const [gradientDefiner, setGradientDefiner] = useState({
    color1: "#FFFF00",
    color2: "#000000",
    angle: 50,
    cssCode: "",
  });

  useEffect(() => {
    //I am using useEffect to update my UI to state changes
    const cssCode = generateCSScode(gradientDefiner); //invokes the 'generateCSScode' func, that takes the current 'graidentDefiner' state and returns CSS code as a string.
    setGradientDefiner((prevState) => ({
      //updates the state
      ...prevState,
      cssCode: cssCode,
    }));
  }, [gradientDefiner.color1, gradientDefiner.color2, gradientDefiner.angle]); //the function is called when the values of the dependecy array change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGradientDefiner((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const generateCSScode = ({ angle, color1, color2 }) => {
    return `background: linear-gradient(${angle}deg, ${color1}, ${color2});
  background: -moz-linear-gradient(${angle}deg, ${color1}, ${color2});
  background: -webkit-linear-gradient(${angle}deg, ${color1}, ${color2});`;
  };

  return (
    <div className="gradient-generator">
      <div className="input-section">
        <label>Color 1: </label>
        <input
          type="color"
          name="color1"
          value={gradientDefiner.color1}
          onChange={handleChange}
        />
        <label>Color 2: </label>
        <input
          type="color"
          name="color2"
          value={gradientDefiner.color2}
          onChange={handleChange}
        />
        <label>Angle: </label>
        <input
          type="number"
          name="angle"
          value={gradientDefiner.angle}
          onChange={handleChange}
        />
      </div>
      <div
        className="gradient-style"
        style={{
          background: `linear-gradient(${gradientDefiner.angle}deg, ${gradientDefiner.color1}, ${gradientDefiner.color2})`,
        }}
      ></div>
      <div className="code-output">
      <textarea readOnly value={gradientDefiner.cssCode} />
      </div>
    </div>
  );
};

export default GradientBox;
