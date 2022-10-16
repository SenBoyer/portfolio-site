import React from "react";

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
      <div id="site-circle">
        <a href={siteUrl} rel="noopener noreferrer" src={img}>
          <div id="circle-title">{topLine}</div>
        </a>
      </div>
    </>
  );
};
