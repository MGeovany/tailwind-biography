import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="font-['Sen']">
    <Navbar />
    <Home />
    <About />
    <Contact />
  </div>
);
