import styled from "styled-components";
import { FaReact } from "react-icons/fa";

export const ReactLogo = styled(FaReact)`
  height: 4rem;
  width: 4rem;
  margin: 0 100px;
  color: #56d1f3;
`;

export const ReactContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 26rem;
  height: 26rem;

  h1 {
    width: 100%;
    margin-bottom: 2rem;
    justify-self: center;
    padding-left: 11rem;
  }

  a {
    text-decoration: none;
    display: flex;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    flex-basis: calc(100% / 3);
    flex-shrink: 0;
    margin: 0px 10px;

    &:hover {
      outline: 3px solid #56d1f3;
    }

    &::nth-child(1) {
      background-color: black;
    }
  }
  /* background: url(https://i.pinimg.com/originals/6e/e3/77/6ee377802a0da8f2910d539178131e07.png); */

  @media screen and (min-width: 967px) and (max-width: 1127px) {
    a {
      flex-basis: calc(100% / 3);
    }
  }

  @media screen and (max-width: 967px) {
    a {
      flex-basis: calc(100% / 2);
    }
  }

  #wordle a {
    background-image: url(https://i.ibb.co/Sd6kP7T/Screenshot-155.png);
    background-position: top;
  }

  #wordle #circle-text {
    left: 50px;
    top: 64px;
    font-size: 1.6rem;
    color: #dbe8d4;
    font-family: "Josefin Sans", sans-serif;
  }

  #codm a {
    background-image: url(https://i.imgur.com/dV1O2S4.png);
    background-position: top;
    background-position-y: 10px;
  }

  #codm a:hover {
    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -ms-filter: blur(2px);
    -o-filter: blur(2px);
    filter: blur(2px);
  }

  #codm #circle-text {
    top: 22px;
    left: 47px;
    font-size: 1.6rem;
    color: #ffffff;
  }

  #senflix a {
    /* Firefox
    background-image: url("https://i.imgur.com/5lmpIb3.png");
    background-position-x: -2px; */

    /* Chrome */
    background-image: url(https://i.imgur.com/5lmpIb3.png);
    background-position-x: 7px;
    background-position-y: 8px;
  }

  #senflix #circle-text {
    margin-left: 47px;
    left: 2px;
    top: 64px;
    font-size: 1.6rem;
    color: #dbe8d4;
  }

  /* ---------CELL PHONES--------- */

  @media screen and (max-width: 767px) {
    padding-bottom: 25px;
  }
`;
