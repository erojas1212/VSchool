import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ListOfAnimes from "./components/ListOfAnimes";
import Favorites from "./components/Favorites";
import AnimeDetail from "./components/AnimeDetail";
import "./App.css";
import animeLogo from "./images/anime-logo.png";

function App() {
  return (
    <Router>
      <div className="nav-wrapper">
        <nav className="nav-bar">
          <img src={animeLogo} className="nav-logo" alt="Anime Logo" />
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ListOfAnimes">List of Animes</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListOfAnimes" element={<ListOfAnimes />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/anime/:mal_id" element={<AnimeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
