import React from 'react';
import SectionTitle from '../../SectionTitle';
import ContactForm from '../form/ContactForm';
import ContactInfo from '../info/ContactInfo';
import { Container } from './style';

export default function ContactSection() {
  return (
    <Container>
      <SectionTitle heading="Contato" />
      <div>
        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
}
