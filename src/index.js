import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

localStorage.setItem(
  "itemsData",
  JSON.stringify([
    { id: 1, content: "Learn ReactJS", done: true },
    { id: 2, content: "Learn NodeJS", done: false },
  ])
);

console.log(localStorage);
