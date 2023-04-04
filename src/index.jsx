import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Task2App from "./tasks/2.1.NavLink/Task2App";
import Task3App from "./tasks/3.1.SearchParams/Task3.1App";
import Task4App from "./tasks/4.1.Loaders/Task4App";
import Task5App from "./tasks/5.AuthRequiredLayoutRoute/Task5App";
import Task6App from "./tasks/6.Actions/Task6App";
import "./server";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
