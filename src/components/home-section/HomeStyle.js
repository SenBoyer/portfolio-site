import styled from "styled-components";

export const Section2 = styled.section`
  margin-top: 3rem;
  background-color: #222733;
  background: linear-gradient(
    rgba(46, 52, 69, 1) 0%,
    rgba(35, 40, 53, 1) 57%,
    rgba(34, 39, 51, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;

  h1 {
    font-family: "Josefin Sans", sans-serif;
    color: #dbe8d4;
    font-size: 6.75rem;
    font-weight: 200;
    padding-top: 10px;
    line-height: 1;
    letter-spacing: 0.125em;
    white-space: nowrap;
  }

  p.mission-statement {
    font-family: "Josefin Sans", sans-serif;
    margin-top: 1em;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.125em;
    padding-bottom: 4rem;
    color: #dbe8d4;
  }

  p.description {
    font-family: "Titillium Web", sans-serif;
    font-size: 1.25rem;
    margin: 1rem 25rem;
    padding-top: 3rem;
    line-height: 1.5;
    letter-spacing: 0.06em;
    color: #dbe8d4;
  }

  /* ---------CELL PHONES--------- */

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 2.25rem;
    }

    p.mission-statement {
      max-width: 305px;
      text-align: center;
    }

    p.description {
      width: 335px;
      text-align: center;
      margin-top: -1rem;
    }
  }
`;
