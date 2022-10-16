import React from "react";
import { circleObjectOne, circleObjectTwo, circleObjectThree } from "./vueData";
import { Circle } from "../../site-icon/siteIcon";
import { VueLogo, VueContainer } from "./vuebox.styles";

const Vue3Box = () => {
  return (
    <>
      <VueContainer>
        <VueLogo />
        <Circle {...circleObjectOne} />
        <Circle {...circleObjectTwo} />
        <Circle {...circleObjectThree} />
      </VueContainer>
    </>
  );
};

export default Vue3Box;
