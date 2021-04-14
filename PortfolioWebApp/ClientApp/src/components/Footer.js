import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="footer-col">
          <h4>Looking to hire?</h4>
          <p></p>
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