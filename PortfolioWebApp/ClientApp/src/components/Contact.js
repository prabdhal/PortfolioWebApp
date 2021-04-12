import React from 'react';
import { Container } from 'reactstrap';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Container>
      <h2 style={{ paddingTop: "100px" }}>Contact Me</h2>
      <ContactForm />
    </Container>
  );
}

export default Contact;