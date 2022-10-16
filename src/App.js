import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeSection from "./components/home-section";
import Navbar from "./components/navbar";
import WebSection from "./components/web-section";
import GameSection from "./components/games-section";
import AboutSection from "./components/about-section";

function App() {
  return (
    <>
      <Navbar />
      <HomeSection className="home" id="home" />
      <WebSection className="web" id="web" />
      <GameSection className="games" id="games" />
      <AboutSection className="about" id="about" />
    </>
  );
}

export default App;
