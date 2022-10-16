import React from "react";
import {
  circleObjectOne,
  circleObjectTwo,
  circleObjectThree,
} from "./reactData";
import { Circle } from "../../site-icon/siteIcon";
import { ReactContainer, ReactLogo } from "./reactbox.styles";

const ReactBox = () => {
  return (
    <>
      <ReactContainer>
        <ReactLogo />
        <div id="wordle">
          <Circle {...circleObjectOne} />
        </div>
        <Circle {...circleObjectTwo} />
        <Circle {...circleObjectThree} />
      </ReactContainer>
    </>
  );
};

export default ReactBox;
