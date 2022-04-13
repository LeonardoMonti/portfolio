import React from 'react';
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import Info from './Info';

const FormStyles = styled.div`
  .infoContain {
    width: 500px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.6rem;
  }

  @media only screen and (max-width: 1024px) {
    .infoContain {
      width: 400px;
      min-height: 400px;
    }
  }
  @media only screen and (max-width: 768px) {
    .infoContain {
      width: 300px;
      flex-direction: row;
      min-height: 10px;
      height: 50px;
      justify-content: center;
      gap: 0.6rem;
    }
  }
`;

export default function ContactForm() {
  return (
    <FormStyles>
      <div className="infoContain">
        <Info
          icon={<FaWhatsapp />}
          content="35 99887-8679"
          direct="https://api.whatsapp.com/send?phone=5535998878679"
        />
        <Info icon={<FaEnvelope />} content="contatoleomonti@gmail.com" />
        <Info
          icon={<FaGithub />}
          content="Github"
          direct="https://github.com/LeonardoMonti"
        />
        <Info
          icon={<FaLinkedin />}
          content="Linkedin"
          direct="https://www.linkedin.com/in/leonardomonti/"
        />
      </div>
    </FormStyles>
  );
}
