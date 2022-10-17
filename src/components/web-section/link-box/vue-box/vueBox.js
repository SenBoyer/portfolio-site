import React from "react";
import { circleObjectOne, circleObjectTwo, circleObjectThree } from "./vueData";
import { Circle } from "../../site-icon/siteIcon";
import { VueLogo, VueContainer } from "./vuebox.styles";

const Vue3Box = () => {
  return (
    <>
      <VueContainer>
        <VueLogo />
        <div id="finstagram">
          <Circle {...circleObjectOne} />
        </div>
        <Circle {...circleObjectTwo} />
        <Circle {...circleObjectThree} />
      </VueContainer>
    </>
  );
};

export default Vue3Box;
