import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
// import { motion } from 'framer-motion/dist/framer-motion';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import LinkedinIcon from '../assets/images/linkedin-icon.png';
import GithubIcon from '../assets/images/github-icon.png';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    min-height: 800px;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 370px;
    width: 100%;
    height: 520px;
    margin: 0 auto;
    border-bottom: 1px solid var(--blue-up3);
  }
  .hero__info {
    padding-top: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }
  .icon {
    max-width: 60px;
    display: flex;
  }
  .hero__social {
    top: 75vh;
    left: 50px;
  }
  .hero__scrollDown {
    top: 75vh;
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      opacity: 0.8;
      color: var(--white);
      font-size: 1.8rem;
      font-weight: bold;
      transform: translateY(-65px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__icon {
    ul {
      li {
        margin-bottom: 0.3rem;
        a {
          opacity: 1;
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1440px) {
    .hero__social {
      top: 68vh;
    }
    .hero__img {
      width: 260px;
      height: 420px;
    }
    .hero__info {
      padding-top: 3px;
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 630px;
    }
    .hero__heading {
      font-size: 1.5rem;
      margin-bottom: -4rem;
      .hero__name {
        font-size: 3.7rem;
        padding-bottom: 1rem;
      }
    }
    .hero__img {
      width: 260px;
      height: 375px;
    }
    .hero__info {
      padding-top: 3px;
    }
    .icon {
      max-width: 40px;
      display: flex;
    }
    .hero__social {
      left: 7px;
      top: 40vh;
      width: 20px;
      .hero__social__indicator {
        width: 33px;
        p {
          opacity: 0.9;
          font-size: 1.5rem;
        }
        img {
          max-height: 45px;
        }
      }
      .hero__social__icon {
        ul {
          li {
            a {
              font-size: 0.5rem;
              margin-bottom: 0.5rem;
              img {
                width: 3.5rem;
              }
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 4px;
      width: 20px;
      bottom: 20px;
      gap: 2rem;
      p {
        font-size: 1.6rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ y: [100, 40, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div id="home" className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Olá sou</span>
            <span className="hero__name">Leonardo Monti</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>Desenvolvedor Front-end</PText>
            <Button
              btnText="Veja meus projetos"
              icon={<FaArrowRight className="icon" />}
              btnLink="#projects"
            />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Siga</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__icon">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/leonardomonti/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedinIcon} alt="icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/LeonardoMonti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={GithubIcon} alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
