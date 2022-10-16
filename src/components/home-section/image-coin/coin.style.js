import styled from "styled-components";

export const CoinStyled = styled.div`
  border: 1px dotted #dbe8d4;
  border-radius: 50%;

  @media screen and (max-width: 767px) {
    margin-top: -3rem;
  }
  /* display: flex;

  flip-container {
    perspective: 1000px;
  }

  .flip-container.hover .flipper:hover {
    transform: rotateY(180deg);
  }
  .flip-container,
  .front,
  .back {
    width: 320px;
    height: 480px;
  }
  .flipper :hover {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  .front,
  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .front {
    z-index: 2;
    transform: rotateY(0deg);
  }

  .img-front {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    outline: #c1ccbe dashed 1px;

    :hover {
      transform: rotateY(180deg);
    }
  }

  .back {
    transform: rotateY(180deg);
  } */

  /* -----------WORKING-------------- */

  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    width: 10rem;
    height: 10rem;
    perspective: 1000px;
    border-radius: 50%;
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: transparent;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: transparent;
    color: black;
  }

  .flip-card-front img {
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }

  /* Style the back side */
  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
  }

  .flip-card-back img {
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
  }
`;
