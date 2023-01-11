import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Section1 = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Nav = styled.div`
  font-family: "Titillium Web", sans-serif;
  height: 3rem;
  background: #525e65;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0rem calc((100vw - 1000px) / 2);
  z-index: 10;
  overflow: hidden;
  position: fixed;

  li {
    color: #dbe8d4;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    :hover {
      color: #73cca8;
      border-bottom: 5px solid #73cca8;
    }
  }

  a {
    text-decoration: none;
    color: #d4e0ce;
  }

  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const Links = styled(Link)`
  color: #dbe8d4;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  :hover {
    color: #73cca8;
    border-bottom: 5px solid #73cca8;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
    position: absolute;
    top: -10px;
    right: -15px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  /* Second Nav */
  /* margin-right: 24px; */

  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
