import styled from 'styled-components';
import { Swiper } from 'swiper/react/swiper-react';
// swiper bundle styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 830px;

  @media only screen and (max-width: 768px) {
    padding: 10px;
    height: 850px;
  }

  h1 {
    font-family: 'Montserrat Bold';
    letter-spacing: 3px;
    text-shadow: 1px 2px 5px var(--black-op);
    padding: 50px 0;
    font-size: 7rem;
    text-transform: uppercase;

    @media only screen and (max-width: 1024px) {
      letter-spacing: 2px;
      padding-top: 45px 0;
      font-size: 6.2rem;
    }

    @media only screen and (max-width: 768px) {
      letter-spacing: 1px;
      padding-top: 35px 0;
      font-size: 4.6rem;
    }
  }

  h2 {
    text-shadow: 1px 2px 3px var(--black-op);
    padding: 50px 0;
    letter-spacing: 3px;
    font-size: 3rem;
    text-transform: uppercase;

    @media only screen and (max-width: 1024px) {
      letter-spacing: 2px;
      padding: 35px 0;
      font-size: 2.5rem;
    }

    @media only screen and (max-width: 768px) {
      letter-spacing: 1px;
      padding: 28px 0;
    }
  }

  section {
    width: 90%;

    p {
      text-shadow: 1px 2px 3px var(--black-op);
      text-align: center;
      font-size: 2.1rem;

      @media only screen and (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;

export const SkillsEl = styled(Swiper)`
  padding: 1.5rem 0.9rem;
  width: 60%;
  display: flex;
  align-items: center;
  height: 170px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border-radius: 10px;
  background-color: var(--blue-up4);

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0.7rem;
    width: 75%;
    height: 140px;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 1rem;
    width: 100%;
  }
  
  .swiper-wrapper {
    cursor: grab;
    :active {
      cursor: grabbing;
    }

    img {
      width: 110px;
      height: 110px;

      @media only screen and (max-width: 1024px) {
        width: 90px;
        height: 90px;
      }
    }

    p {
      font-size: 1.4rem;

      @media only screen and (max-width: 1024px) {
        font-size: 1.3rem;
      }

      @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;
