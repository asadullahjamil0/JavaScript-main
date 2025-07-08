import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Check from "./check.jsx";

createRoot(document.getElementById("root")).render(
  <div>
    <Check />
    <h1>Learning is crucial</h1>
  </div>
);
