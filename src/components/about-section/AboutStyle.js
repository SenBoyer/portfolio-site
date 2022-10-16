import styled from "styled-components";

export const Section5 = styled.section`
  background-color: #222733;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    margin-top: 3rem;
    font-family: "Josefin Sans", sans-serif;
    font-size: 2rem;
    line-height: 1.25;
    letter-spacing: 0.125em;
    font-weight: 400;
    padding: 0 5rem;
    padding-bottom: 3rem;
    border-bottom: 4px solid #525e65;
    margin-bottom: 3rem;
  }

  p.about {
    font-family: "Titillium Web", sans-serif;
    margin: 50px 375px;
    font-size: 1.2rem;
    color: #c1ccbe;
    margin-top: 3rem;
    justify-content: center;

    @media screen and (max-width: 767px) {
      max-width: 300px;
      margin: 50px 0;
      text-align: center;
    }
  }
`;

export const PixelGuy = styled.img`
  height: 307px;
  margin-right: 40px;
  /* width: 307px; */
`;
