import React from 'react';
import {
  FaWhatsapp,
  FaEnvelope,
  FaSearchLocation,
  FaLinkedin,
} from 'react-icons/fa';
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
      width: 330px;
      min-height: 220px;
      height: 260px;
      justify-content: start;
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
          icon={<FaSearchLocation />}
          content="Pedralva - Sul de minas"
          direct="https://goo.gl/maps/j1iSnZCEDawfXw4r9"
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
