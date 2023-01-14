import { React, useState } from "react";

import HomeSection from "../components/home-section";
import Navbar from "../components/navbar";
import WebSection from "../components/web-section";
import GameSection from "../components/games-section";
import AboutSection from "../components/about-section";
import Bubbles from "../components/bubbles/Bubbles";

function Home() {
  const [wantsBubbles, setWantsBubbles] = useState(false);

  return (
    <>
      <Navbar />
      <div className="bubbles-container">{wantsBubbles && <Bubbles />}</div>
      <HomeSection
        className="home"
        id="home"
        setWantsBubbles={setWantsBubbles}
        wantsBubbles={wantsBubbles}
      />
      <WebSection className="web" id="web" />
      <GameSection className="games" id="games" />
      <AboutSection className="about" id="about" />
    </>
  );
}

export default Home;
