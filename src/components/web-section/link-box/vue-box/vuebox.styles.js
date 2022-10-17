import styled from "styled-components";
import { FaVuejs } from "react-icons/fa";

export const VueLogo = styled(FaVuejs)`
  height: 4rem;
  width: 4rem;
  margin: 0 100px;
  color: #37485a;
`;

export const VueContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 26rem;
  height: 26rem;

  #finstagram a{
    background-image: url(https://firebasestorage.googleapis.com/v0/b/portfolio-3ad1f.appspot.com/o/Instagram-Logo-Icon-small.png?alt=media&token=4879529a-1c1e-4838-a11b-a7c1cc1d3a2c);
    background-position: center;
  }

  #finstagram #circle-title{
    margin-left: 18px;
    font-size: 21px;
    color: #222733;
    font-family: "Josefin Sans",sans-serif;
    -webkit-text-decoration: none;
    text-decoration: none;
  }

   h1 {
    width: 100%;
    margin-bottom: 2rem;
    justify-self: center;
    padding-left: 11rem;}
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
      outline: 3px solid #37485A;
    }
  }`;
