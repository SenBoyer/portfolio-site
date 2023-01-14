import styled from "styled-components";

export const WrapperBox = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  width: 70%;
  a {
    display: flex;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    flex-basis: calc(100% / 2);
    flex-shrink: 0;
    margin: 0px 10px;
  }

  #simple-turn a {
    background-image: url(https://i.imgur.com/2LhKTjy.png);
    background-size: 260px;
    background-position: center;}

    /* @media screen and (min-width: 967px) and (max-width: 1127px) {
      a {
        flex-basis: calc(100% / 2);
      }
    } */

    /* @media screen and (max-width: 967px) {
      a {
        flex-basis: calc(100% / 2);
      }
    } */

  }

  #simple-turn a {
  }

  #simple-turn #circle-title {
    margin-left: 12px;
    font-size: 21px;
    color: #dbe8d4;
    font-family: "Josefin Sans", sans-serif;
    -webkit-text-decoration: none;
    text-decoration: none;
    text-align: center;
  }
`;

// export const StyledLinkBox = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: fit-content;

//   div {
//     border-radius: 50%;
//     background-color: white;
//   }
// `;
