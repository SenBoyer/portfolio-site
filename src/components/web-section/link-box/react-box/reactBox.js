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
        <div className="wordle">
          <Circle {...circleObjectOne} />
        </div>
        <div className="codm">
          <Circle {...circleObjectTwo} />
        </div>
        <div className="senflix">
          <Circle {...circleObjectThree} />
        </div>
      </ReactContainer>
    </>
  );
};

export default ReactBox;
