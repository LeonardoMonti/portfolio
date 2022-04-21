import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { BiDownload } from 'react-icons/bi';
import ExampleDoc from '../assets/images/gifloading.gif';

const FooterStyles = styled.footer`
  display: flex;
  min-height: 280px;
  width: 100%;
  background: var(--black-2);
  border: 2px solid var(--blue-up2);
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;
  justify-content: space-between;
  margin-top: 100px;
  .section__footer {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 30%;
  }
  .section__pages {
    align-items: center;
    width: 100%;
    font-size: 2rem;
    li {
      padding-left: 8vh;
      text-align: start;
      line-height: 1.7;
      a {
        transition: all 0.3s ease-in;
        &:hover {
          text-shadow: 2px 2px 30px var(--blue-up1);
        }
      }
    }
  }
  .section__footer_middle {
    display: flex;
    width: 40%;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 2rem;
    text-shadow: 2px 2px 40px var(--blue-up1);
    .link {
      .icon {
        width: 30px;
      }
    }
  }
  .downloadCV {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2rem;
    width: 230px;
    gap: 1rem;
    text-shadow: 1px 1px 2px black;
    color: var(--gray-1);
    background-color: var(--blue-up4);
    border: 2px solid var(--blue-up2);
    height: 60px;
    border-radius: 8px;
    &:hover {
      text-shadow: 1px 1px 2px black;
      opacity: 0.9;
    }
    .icon {
      width: 40px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .section__pages {
      font-size: 1.9rem;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 400px;
    padding-bottom: 8px;
    .section__footer {
      width: 100%;
    }
    .section__pages {
      align-items: center;
      width: 100%;
      font-size: 2rem;
      li {
        padding-left: 0;
        text-align: center;
        a {
          text-shadow: 2px 2px 10px var(--blue-up1);
        }
      }
    }
    .section__footer_middle {
      width: 100%;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="section__footer">
        <ul className="section__pages">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <span>Contato</span>
          </li>
        </ul>
      </div>
      <div className="section__footer_middle">
        <p>
          Portfolio desenvolvido por
          {' '}
          <a
            href="https://github.com/LeonardoMonti"
            rel="noreferrer"
            target="_blank"
            className="link"
          >
            Leonardo Monti
            {' '}
            <FaGithub className="icon" />
          </a>
        </p>
      </div>
      <div className="section__footer">
        <a
          href={ExampleDoc} // adicionar curriculum
          download="MyExampleDoc"
          target="_blank"
          rel="noreferrer"
          className="downloadCV"
        >
          <BiDownload className="icon" />
          Download CV
        </a>
      </div>
    </FooterStyles>
  );
}
