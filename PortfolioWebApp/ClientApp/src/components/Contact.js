import React from 'react';

import ContactForm from './ContactForm';

import './Contact.css'

const Contact = () => {
  return (
    <>
      <h2 className="section-header" id="contact">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-col">
          <ul>
            <li>Prabdeep Dhaliwal</li>
            <li><a href="mailto: prab.dhaliwal95@gmail.com">prab.dhaliwal95@gmail.com</a></li>
            <li><a href="tel:6476423917">(647) 642-3917</a></li>
            <li><address><a
              href="https://www.google.com/maps/place/Guelph,+ON,+Canada/@43.5344116,-80.3102079,12z/data=!3m1!4b1!4m5!3m4!1s0x882b9ad0c3a9fb6b:0x5037b28c7231b60!8m2!3d43.5448048!4d-80.2481666"
              target="_blank"
              rel="noopener noreferrer"
            >
              Guelph, Ontario
            </a></address></li>
          </ul>
        </div>
        <div className="contact-col">
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;