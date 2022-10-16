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

    @media screen and (min-width: 967px) and (max-width: 1127px) {
      a {
        flex-basis: calc(100% / 2);
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
