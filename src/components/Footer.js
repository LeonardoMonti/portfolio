import React from 'react';
import styled from 'styled-components';
import { FaDownload, FaReply } from 'react-icons/fa';
import PText from './PText';
import Button from './Button';
import ExampleDoc from '../assets/images/gifloading.gif';

const FooterStyles = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  background: var(--black-2);
  border: 2px solid var(--blue-up2);
  border-radius: 8px 8px 0px 0px;
  justify-content: space-around;
  .container {
    display: flex;
    justify-content: space-around;
  }
  .icon {
    max-width: 50px;
    display: flex;
  }
  .sectionEstrutura {
    display: flex;
    width: 40%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
    align-content: center;
  }
  .sectionEstrutura2 {
    width: 600px;
  }
  .section__pages {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    li {
      text-align: start;
      width: 65%;
      display: flex;
      a {
        font-size: 2.2rem;
        &:hover {
          text-decoration: line-through;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    line-height: 5rem;
    flex-direction: column;
    .sectionEstrutura {
      align-items: center;
      width: 100%;
      padding-bottom: 10px;
      p {
        display: none;
      }
      li {
        text-align: start;
        width: 90%;
        display: flex;
      }
      a {
        font-size: 1.5rem;
        height: 3rem;
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles className="container">
      <div className="sectionEstrutura remove">
        <PText>
          <FaReply />
        </PText>
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
            <a>Contato</a>
          </li>
        </ul>
      </div>
      <div className="sectionEstrutura sectionEstrutura2">
        <PText>Portfolio desenvolvido por Leonardo Monti</PText>
      </div>
      <div className="sectionEstrutura">
        <a
          href={ExampleDoc}
          download="MyExampleDoc"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            btnText="Download CV"
            icon={<FaDownload className="icon" />}
            btnLink=""
          />
        </a>
      </div>
    </FooterStyles>
  );
}
