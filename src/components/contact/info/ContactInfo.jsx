import React from 'react';
import {
  FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import { Container, Icon } from './style';

export default function ContactForm() {
  return (
    <Container>
      <a href="https://api.whatsapp.com/send?phone=5535998878679" target="_blank" rel="noreferrer">
        <Icon><FaWhatsapp /></Icon>
        <span>35 99887-8679</span>
      </a>

      <a href="/gmail" target="_blank" rel="noreferrer">
        <Icon><FaEnvelope /></Icon>
        <span>contatoleomonti@gmail.com</span>
      </a>

      <a href="https://github.com/LeonardoMonti" target="_blank" rel="noreferrer">
        <Icon><FaGithub /></Icon>
        <span className="hidden">Github</span>
      </a>

      <a href="https://www.linkedin.com/in/leonardomonti/" target="_blank" rel="noreferrer">
        <Icon><FaLinkedin /></Icon>
        <span>Linkedin</span>
      </a>

    </Container>
  );
}
