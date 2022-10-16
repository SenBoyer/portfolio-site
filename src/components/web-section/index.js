import React from "react";
import LinkBox from "./link-box/Link-Box";
import { H1, P, Section3 } from "./WebStyle";
import { Element } from "react-scroll";

const WebSection = () => {
  return (
    <>
      <Element id="web-section" name="web">
        <Section3>
          <H1>WEB</H1>
          <P>
            Work I've done that resides out there, somewhere in the vast virtual
            space of the Internet.
          </P>
          <LinkBox />
        </Section3>
      </Element>
    </>
  );
};

export default WebSection;
