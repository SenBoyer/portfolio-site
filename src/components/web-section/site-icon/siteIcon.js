import React from "react";
import { WrapperBox } from "./siteIcon.styles";

export const Circle = ({
  primary,
  topLine,
  description,
  imgStart,
  img,
  start,
  siteUrl,
}) => {
  return (
    <>
      <WrapperBox>
        <div id="site-circle">
          <a href={siteUrl} rel="noopener noreferrer">
            {" "}
          </a>
          <div id="circle-text" href={siteUrl}>
            {topLine}
          </div>
        </div>
      </WrapperBox>
    </>
  );
};
