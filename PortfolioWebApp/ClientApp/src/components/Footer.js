import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="p-5">
      <div className="top-footer mt-5">
        <div className="footer-col">
          <h5>Projects</h5>
          <div className="footer-links">
            <a href="/projects">Tower Defence - Enemy Wave</a>
            <a href="/projects">BlogSimple</a>
            <a href="/projects">DestXplor</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <div className="footer-links">
            <a href="mailto: prab.dhaliwal95@gmail.com">prab.dhaliwal95@gmail.com</a>
            <a href="tel:6476423917">(647) 642-3917</a>
            <a
              href="https://www.google.com/maps/place/Guelph,+ON,+Canada/@43.5344116,-80.3102079,12z/data=!3m1!4b1!4m5!3m4!1s0x882b9ad0c3a9fb6b:0x5037b28c7231b60!8m2!3d43.5448048!4d-80.2481666"
              target="_blank"
              rel="noopener noreferrer"
            >Guelph, Ontario</a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Social</h5>
          <div className="social-icons-container">
            <SocialIcon url="https://www.linkedin.com/in/prabdeep-dhaliwal/" />
            <SocialIcon url="https://github.com/prabdhal" />
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        &#169; Prabdeep Dhaliwal {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;