import React from "react";
import { Section1, Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import Resume from "../../pages/Resume";

const Navbar = () => {
  return (
    <>
      <Section1>
        <Nav>
          <Bars />
          <Link to="/">
            <li>
              <Scroll
                activeClass="active"
                to="home-section"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Link to="/">Home</Link>
              </Scroll>
            </li>
          </Link>
          <li>
            <Scroll
              activeClass="active"
              to="web-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Web
            </Scroll>
          </li>
          <li>
            <Scroll
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
            </Scroll>
          </li>
          <li>
            <Scroll
              to="about-section"
              spy={true}
              smooth={true}
              duration={500}
              className="about"
              activeClass="some-active-class"
            >
              About
            </Scroll>
          </li>
          <Link to="/resume">
            <li id="resume">Resume</li>
          </Link>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </Nav>
      </Section1>
    </>
  );
};

export default Navbar;
