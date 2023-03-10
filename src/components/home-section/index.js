import { React } from "react";
import { Section2 } from "./HomeStyle";
import { Element } from "react-scroll";
import Coin from "./image-coin/imageCoin";

const HomeSection = ({ setWantsBubbles, wantsBubbles }) => {
  return (
    <>
      <Element id="home-section" name="home">
        <Section2>
          <h1>SENECA BOYER</h1>
          <p className="mission-statement">
            MISSION TO BECOME FULL-STACK WEB DEVELOPER
          </p>
          <div
            id="coin-clicker"
            onClick={() => {
              setWantsBubbles(!wantsBubbles);
            }}
          >
            <Coin />
          </div>
          <p className="description">
            For over a decade, I have studied and inscribed the sacred runes and
            performed the arcane rituals that breathe life into the realm of the
            internet. <br /> <br />
            The web can sometimes be indistinguishable from magic, but I have
            the knowledge and patience required to make just about anything.
          </p>
        </Section2>
      </Element>
    </>
  );
};

export default HomeSection;
