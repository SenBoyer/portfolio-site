import React from "react";
import { GameStyled, Section4 } from "./GamesStyle";
import { Element } from "react-scroll";
import { WrapperBox } from "../games-section/gamelinks/gamelink.styles";
import { Circle } from "../web-section/site-icon/siteIcon";
import {
  circleObjectOne,
  circleObjectTwo,
  circleObjectThree,
  circleObjectFour,
  circleObjectFive,
} from "../games-section/gamelinks/circleData";

const GameSection = () => {
  return (
    <>
      <Element id="games-section" name="games">
        <Section4>
          <GameStyled>
            <h1>GAMES</h1>
            <p>Games I've made or am currently making!</p>
          </GameStyled>
          <WrapperBox>
            <div className="simple-turn">
              <Circle {...circleObjectOne} />
            </div>
            <div className="high-noon">
              <Circle {...circleObjectTwo} />
            </div>
          </WrapperBox>
        </Section4>
      </Element>
    </>
  );
};

export default GameSection;
