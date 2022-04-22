import React from 'react';
import ContactForm from '../form/ContactForm';
import ContactInfo from '../info/ContactInfo';
import { Container } from './style';

export default function ContactSection() {
  return (
    <Container id="contact">
      <h1>Contato</h1>
      <div>
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
}
