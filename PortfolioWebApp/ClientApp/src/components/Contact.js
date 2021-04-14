import React from 'react';
import { Container } from 'reactstrap';

import HeroSection from './HeroSection';
import ContactForm from './ContactForm';

import './Contact.css'

const Contact = () => {
  return (
    <>
      <HeroSection
        heading={"Contact"}
        subheadingTwo={"These are some of my projects using Node.js and more recently, ASP.NET"}
        showButton={false}
      />
      <Container className="section-container">
        <h2 className="section-header" id="contact">Contact Me</h2>
        <ContactForm />
      </Container>
    </>
  );
}

export default Contact;