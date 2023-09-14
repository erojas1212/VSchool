import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UglyProvider } from "./components/UglyContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UglyProvider>
    <App />
  </UglyProvider>
);
