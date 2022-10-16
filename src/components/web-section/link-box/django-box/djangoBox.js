import React from "react";
import {
  circleObjectOne,
  circleObjectTwo,
  circleObjectThree,
} from "./djangoData";
import { Circle } from "../../site-icon/siteIcon";
import { DjangoContainer, DjangoLogo } from "./djangobox.styles";

const DjangoBox = () => {
  return (
    <>
      <DjangoContainer>
        <DjangoLogo />
        <Circle {...circleObjectOne} />
        <Circle {...circleObjectTwo} />
        <Circle {...circleObjectThree} />
      </DjangoContainer>
    </>
  );
};

export default DjangoBox;
