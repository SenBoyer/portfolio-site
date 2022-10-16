import styled from "styled-components";
import { SiDjango } from "react-icons/si";

export const DjangoLogo = styled(SiDjango)`
  height: 4rem;
  width: 4rem;
  margin: 0 100px;
  color: #2aa473;
`;

export const DjangoContainer = styled.div`
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

    &:hover {
      outline: 3px solid #2aa473;
    }
  }

  /* ---------CELL PHONES--------- */

  @media screen and (max-width: 767px) {
    padding-bottom: 25px;
  }
`;