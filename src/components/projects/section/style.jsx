import styled from 'styled-components';

const Container = styled.section`
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
    max-height: 700px;
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
    width: 95%;

    .swiper {
      padding-top: 60px;

    }

    .swiper-button-prev,
    .swiper-button-next {
      border: 1px solid var(--blue-up1);
      position: absolute;
      height: 50px;
      width: 50px;
      background: var(--white);
      font-weight: 700;
      text-shadow: 1px 2px 2px var(--black-op6);
      right: 85px;
      left: auto;
      top: 0;
      transform: translateY(50%);
      color: var(--blue-up1);
      border-radius: 8px;
      :active {
        transform: translateY(52%);
        text-shadow: 1px 1px 2px var(--black-op6);
      }
    }

    .swiper-button-next {
      right: 20px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 2rem;
    }

    @media only screen and (max-width: 1024px) {
      width: 95%;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
      
      .swiper {
        padding-top: 20px;
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: none;
      }
    }
  }
`;

export default Container;
