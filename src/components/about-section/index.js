import React from "react";
import { AboutStyled, PixelGuy, Section5 } from "./AboutStyle";
import { Element } from "react-scroll";
import { Circle } from "../web-section/site-icon/siteIcon";

const AboutSection = () => {
  const saintsRow = {
    primary: true,
    topLine: "Wordle",
    description: "Made with React!",
    imgStart: "",
    img: "",
    start: "",
    siteUrl: "https://senecaboyer0.tripod.com/",
  };

  return (
    <>
      <Element id="about-section" name="about">
        <Section5>
          <h1>ABOUT</h1>
          <PixelGuy
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-3ad1f.appspot.com/o/ds3.svg?alt=media&token=ca20f218-5007-4724-86bd-2275d9d23beb"
            title="pixelguy"
          />
          <p className="about">
            What can a “full-stack web developer” do, you ask? <br />
            <br /> I can conjur a website from nothing into existence, fully
            formed. I do not use tricks, nor is this magic. I specialize in
            manipulating the very fabric of the web, its raw materials of HTML,
            CSS, JavaScript, and SVG. Linux servers serve me, domains are my
            domain, and certificates are certain. <br />
            <br /> Open-source technologies empower this process. I am a custom
            WordPress theme and plugin development expert. I fully embraced the
            Gutenberg editor and can create custom blocks from scratch for any
            conceivable need. I have contributed in small ways to these and
            other open-source efforts and intend to give back every chance I
            get. <br />
            <br /> My art & design background informs ideation to design through
            to implementation. In 2010 I graduated from the Cleveland Institute
            of Art with a focus on digital arts and a mantra to always consider
            my audience. I will always advocate for the user of my interfaces;
            accessibility is not optional. <br />
            <br /> I can plan, design, build, launch, and maintain a website
            myself—did I mention that I build mobile apps too? I have worked on
            10+ published cross-platform iOS and Android apps with React Native
            and Titanium SDK, roughly half of which I built and maintain solo.{" "}
            <br />
            <br /> A full-stack developer knows no bounds. And when they find
            one they cross it without hesitation, boldly going into the unknown
            to return richer for it. logo{" "}
          </p>
          <div className="ccp">
            <div id="site-circle">
              <a
                href="https://senecaboyer0.tripod.com/"
                rel="noopener noreferrer"
                onClick={() => window.confirm("You acknowledge I was 15")}
              >
                ""
              </a>
            </div>
            <div id="title">
              Website I made when I was 15 for my Saints Row clan
            </div>
          </div>
        </Section5>
      </Element>
    </>
  );
};

export default AboutSection;
