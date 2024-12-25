import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Ensure BrowserRouter is imported
import App from "./App";
import "./index.css";  // Ensure the styles are correctly imported

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
