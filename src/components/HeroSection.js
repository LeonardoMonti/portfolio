import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import LinkedinIcon from '../assets/images/linkedin-icon.png';
import GithubIcon from '../assets/images/github-icon.png';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      text-shadow: 1px 1px 10px var(--deep-dark-1);
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    text-shadow: 1px 1px 2px black;
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      opacity: 0.8;
      text-shadow: 0.5px 0.5px 0.5px black;
      color: var(--red-1);
      font-size: 1.8rem;
      font-weight: bold;
      transform: translateY(-70px) rotate(90deg);
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
          opacity: 0.8;
          display: inline-block;
          font-size: 1.6rem;
          letter-spacing: 5px;
          margin-bottom: 2rem;
          img {
            opacity: 0.8;
          }
          img:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.5rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4rem;
        text-shadow: 1px 1px 2px black;
        padding-bottom: 1rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 22px;
        p {
          opacity: 0.8;
          font-size: 1.3rem;
        }
        img {
          max-height: 35px;
        }
      }
      .hero__social__icon {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
              img {
                width: 2.5rem;
              }
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Olá sou</span>
            <span className="hero__name">Leonardo Monti</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <PText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </PText>
            <Button btnText="Veja meus projetos" btnLink="/projects" />
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
