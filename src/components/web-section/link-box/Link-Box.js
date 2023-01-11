import React from "react";
import { WrapperBox } from "./LinkBox.style";
import ReactBox from "../link-box/react-box/reactBox";
import AngularBox from "../link-box/angular-box/angularBox";
import Vue3Box from "../link-box/vue-box/vueBox";

const LinkBox = () => {
  return (
    <>
      <WrapperBox>
        <ReactBox />
        <AngularBox />
        <Vue3Box />
      </WrapperBox>

      {/* <WrapperBox>
        <ReactBox />
        <AngularBox />
        <VueJSBox />
      </WrapperBox> */}
    </>
  );
};

export default LinkBox;
