import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HistoryProvider } from "./components/HistoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HistoryProvider>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
      </style>
      <App />
    </HistoryProvider>
  </React.StrictMode>
);
