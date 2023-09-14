import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AnimeProvider } from "./components/AnimeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </React.StrictMode>
);
