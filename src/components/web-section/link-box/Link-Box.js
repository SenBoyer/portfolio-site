import React from "react";
import { WrapperBox } from "./LinkBox.style";
import ReactBox from "../link-box/react-box/reactBox";
import DjangoBox from "../link-box/django-box/djangoBox";
import Vue3Box from "../link-box/vue-box/vueBox";

const LinkBox = () => {
  return (
    <>
      <WrapperBox>
        <ReactBox />
        <DjangoBox />
        <Vue3Box />
      </WrapperBox>

      {/* <WrapperBox>
        <ReactBox />
        <DjangoBox />
        <VueJSBox />
      </WrapperBox> */}
    </>
  );
};

export default LinkBox;
