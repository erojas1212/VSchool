import React, {useState} from "react";

const ThemeContext = React.createContext()

const ThemeContextProvider = (props) => {

    const [color, setColor] = useState("dark")

    const toggleTheme = () => {
      setColor(precColor => precColor === "dark" ? "light" : "dark")
    }

    return (
    <ThemeContext.Provider value={{
         color: color,
        toggleTheme: toggleTheme
        }}>
         {props.children}
    </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
