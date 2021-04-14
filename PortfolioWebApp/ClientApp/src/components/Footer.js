import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="footer-col">
          <h4>Looking to hire?</h4>
          <div className="contact-information">
            <ul>
              <li><a href="mailto: prab.dhaliwal95@gmail.com">prab.dhaliwal95@gmail.com</a></li>
              <li><a href="tel:6476423917">(647) 642-3917</a></li>
              <li><a
                href="https://www.google.com/maps/place/Guelph,+ON,+Canada/@43.5344116,-80.3102079,12z/data=!3m1!4b1!4m5!3m4!1s0x882b9ad0c3a9fb6b:0x5037b28c7231b60!8m2!3d43.5448048!4d-80.2481666"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guelph, Ontario
            </a></li>
            </ul>
          </div>
          <br />
          <a className="hero-button" href="/contact">Leave a Message</a>
        </div>
        <div className="footer-col">
          <h5>Social</h5>
          <div className="social-icons-container">
            <SocialIcon url="https://www.linkedin.com/in/prabdeep-dhaliwal/" />
            <SocialIcon url="https://github.com/prabdhal" />
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        &#169; Prabdeep Dhaliwal {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;