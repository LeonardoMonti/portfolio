import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-height: 900px;

  @media only screen and (max-width: 1024px) {
    padding: 10px;
    max-height: 768px;
  }

  @media only screen and (max-width: 768px) {
    padding: 0px;
    max-height: 667px;
  }

  h1 {
    font-family: 'Montserrat Bold';
    letter-spacing: 5px;
    text-shadow: 1px 2px 5px var(--black-op);
    padding-top: 50px;
    font-size: 7rem;
    text-transform: uppercase;

    @media only screen and (max-width: 1024px) {
      letter-spacing: 5px;
      padding-top: 45px;
      font-size: 5.7rem;
    }

    @media only screen and (max-width: 768px) {
      letter-spacing: 5px;
      padding-top: 37px;
      padding-bottom: 10px;
      font-size: 4.6rem;
    }
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
