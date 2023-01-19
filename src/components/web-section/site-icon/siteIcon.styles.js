import styled from "styled-components";

export const WrapperBox = styled.div`
  .circle {
    text-decoration: none;
    position: relative;
    display: flex;
    justify-content: center; /* Align horizontal */
    align-items: center;
    width: 10rem;
    height: 10rem;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.6rem;
    opacity: 1;
    color: white;
    transition: all 300ms ease-in-out;
  }

  .circle:hover {
    transform: scale(1.03);
  }

  .circle-bg {
    display: block;
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 0;
    background-position: center center;
    background-size: cover;
    border-radius: 100%;
    transition: all 300ms ease-in-out;
  }

  .circle:hover .circle-bg {
    filter: blur(1px);
  }

  .circle-text {
    display: inline-block;
    padding: 1em;
    opacity: 0;
    transition: all 300ms ease-in-out;
  }

  .circle:hover .circle-text {
    opacity: 1;
  }
`;
