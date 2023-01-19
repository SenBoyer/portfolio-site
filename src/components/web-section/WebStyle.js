import styled from "styled-components";

export const Section3 = styled.section`
  background-color: #222733;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding-bottom: 250px;
`;

export const H1 = styled.h1`
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
`;

export const P = styled.p`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
  line-height: 1.5em;
  font-weight: 400;
  color: #485e81;
  padding-top: 3rem;
  padding-bottom: 5rem;

  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;
