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
        <div className="site-circle">
          <a className="circle" href={siteUrl} rel="noopener noreferrer">
            <span className="circle-text">{topLine}</span>
            <span className="circle-bg"></span>
          </a>
        </div>
      </WrapperBox>
    </>
  );
};
