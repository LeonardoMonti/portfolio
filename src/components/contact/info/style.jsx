import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  gap: 3.3rem;
  justify-content: space-evenly;

  @media only screen and (max-width: 1024px) {
    width: 400px;
    padding: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    height: 190px;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    width: 360px;
    height: 90px;
    gap: 1rem;
    padding: 8px;
    flex-wrap: nowrap;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: var(--blue-up4);
    border-radius: 10px;
    border: 1px solid var(--gray-5);
    gap: 1.5rem;
    font-size: 1.5rem;
    padding: 1.3rem;

    @media only screen and (max-width: 1024px) {
      flex-direction: column;
      justify-content: center;
      width: 160px;
      height: 70px;
      gap: 0.5rem;
    }

    @media only screen and (max-width: 768px) {
      width: 80px;
      height: 70px;
    }

    span {
      font-size: 2rem;

      @media only screen and (max-width: 1024px) {
        display: none;
      }
    }
  }

`;

export const Icon = styled.p`
  width: 50px;

  @media only screen and (max-width: 1024px) {
    width: 55px;
  }

  @media only screen and (max-width: 768px) {
    width: 45px;
  }
`;
