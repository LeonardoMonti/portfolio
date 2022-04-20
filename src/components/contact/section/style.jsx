import styled from 'styled-components';

export const Container = styled.section`
    min-height: 900px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 120px;
    flex-direction: column;
    height: 900px;

    @media only screen and (max-width: 1024px) {
      margin-top: 75px;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 50px;
    }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
    }

    @media only screen and (max-width: 768px) {
      margin-top: 1rem;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

`;

export const ErrorMessage = styled.span`
`;
