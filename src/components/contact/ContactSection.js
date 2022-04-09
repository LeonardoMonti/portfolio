import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactStyles = styled.div`
  height: 100vh;
  .contact {
    background-image: radial-gradient(
      circle,
      #051e4c,
      #071e41,
      #0d1d35,
      #131c29,
      #181a1d
    );
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    padding: 10rem 0;
  }

  .container {
    margin-top: 5rem;
    justify-content: space-between;
    display: flex;
    .line {
      background-color: white;
      width: 1px;
      margin: 50px;
    }
  }

  @media only screen and (max-width: 1440px) {
    .container {
      margin-top: 1rem;
      .line {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      margin-top: 0;
      .line {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .contact {
      min-height: 750px;
    }
    .container {
      margin-top: 5rem;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .line {
        display: none;
      }
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactStyles>
      <div className="contact">
        <SectionTitle heading="Contato" subheading="" />
        <div className="container">
          <ContactInfo />
          <div className="line" />
          <ContactForm />
        </div>
      </div>
    </ContactStyles>
  );
}
