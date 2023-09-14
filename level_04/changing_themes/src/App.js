import React, {useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {

  return (
    <>
      <ThemeContextProvider >
        <Navbar />
        <Main />
        <Footer />
      </ThemeContextProvider >
    </>
  );
}

export default App;
