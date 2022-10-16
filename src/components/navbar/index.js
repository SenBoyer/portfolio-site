import React from "react";
import { Section1, Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <>
      <Section1>
        <Nav>
          <Bars />
          <li>
            <Link
              activeClass="active"
              to="home-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="web-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Web
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="games-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="games"
              activeClass="some-active-class"
            >
              Games
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              className="about"
              activeClass="some-active-class"
            >
              About
            </Link>
          </li>
          <li id="resume">
            <a href="http://www.google.com">Resume</a>
          </li>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </Nav>
      </Section1>
    </>
  );
};

export default Navbar;
