import React from "react";
import {
  circleObjectOne,
  circleObjectTwo,
  circleObjectThree,
} from "./angularData";
import { Circle } from "../../site-icon/siteIcon";
import { DjangoContainer, DjangoLogo } from "./angularBox.styles.";

const AngularBox = () => {
  return (
    <>
      <DjangoContainer>
        <DjangoLogo />
        <div className="rest-countries">
          <Circle {...circleObjectOne} />
        </div>
        <Circle {...circleObjectTwo} />
        <Circle {...circleObjectThree} />
      </DjangoContainer>
    </>
  );
};

export default AngularBox;
