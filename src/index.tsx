import React from 'react';
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from "./App.js";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
