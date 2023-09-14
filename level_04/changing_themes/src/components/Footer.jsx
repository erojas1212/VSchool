import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {

    const context = useContext(ThemeContext)

        const footerColor = context.color === "dark" ? "footer-dark" : "footer-light";

    return (

        <div className ={`${footerColor}`} id="footer">
            <p>Toggle App</p>
        </div>
    )
}

export default Footer;
