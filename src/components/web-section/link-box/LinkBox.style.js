import styled from "styled-components";

export const WrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 26rem;
  a {
    display: flex;
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    flex-basis: calc(100% / 5);
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
      background-color: red;
    }
  }

  /* ---------CELL PHONES--------- */

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    background-color: #222733;
    height: 1030px;
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
