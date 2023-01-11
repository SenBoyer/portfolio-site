import styled from "styled-components";

export const WrapperBox = styled.div`
  #site-circle {
    position: relative;
    width: fit-content;

    a {
      display: inline-block;
      text-decoration: none;
    }
  }

  #site-circle #circle-text {
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    cursor: pointer;
    /* position: absolute;
    bottom: 0px; */
    -webkit-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }

  #site-circle:hover a {
    -webkit-transition: all 300ms ease-in-out;
    -o-transition: all 300ms ease-in-out;
    transition: all 300ms ease-in-out;
    -webkit-filter: blur(1.5px);
    -moz-filter: blur(1.5px);
    -ms-filter: blur(1.5px);
    -o-filter: blur(1.5px);
    filter: blur(1.5px);
    transform: scale(1.03);
  }

  #site-circle:hover #circle-text {
    -webkit-opacity: 1;
    opacity: 1;
  }
`;
