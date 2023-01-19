import React from "react";
import { circleObjectOne, circleObjectTwo, circleObjectThree } from "./vueData";
import { Circle } from "../../site-icon/siteIcon";
import { VueLogo, VueContainer } from "./vuebox.styles";

const Vue3Box = () => {
  return (
    <>
      <VueContainer>
        <VueLogo />
        <div className="finstagram">
          <Circle {...circleObjectOne} />
        </div>
        <div className="money">
          <Circle {...circleObjectTwo} />
        </div>
        <div className="tmz">
          <Circle {...circleObjectThree} />
        </div>
      </VueContainer>
    </>
  );
};

export default Vue3Box;
