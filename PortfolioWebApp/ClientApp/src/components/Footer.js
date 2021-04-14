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
            
          </div>
          <br />
          <a className="footer-button" href="/contact">Leave a Message</a>
        </div>
        <div className="footer-col">
          <div className="social-icons-container">
            <div>
              <a href="mailto: prab.dhaliwal95@gmail.com">
                <i
                  className="fas fa-envelope"
                  style={{ fontSize: "25px", margin: "10px 0" }}
                ></i>
              </a>
              <div>prab.dhaliwal95@gmail.com</div>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/prabdeep-dhaliwal/"
                target="_blank"
                rel="noopener noreferrer">
                <i
                  className="fab fa-linkedin-in"
                  style={{ fontSize: "25px", margin: "10px 0" }}
                ></i>
              </a>
              <div>LinkedIn</div>
            </div>
            <div>
              <a
                href="https://github.com/prabdhal"
                target="_blank"
                rel="noopener noreferrer">
                <i
                  className="fab fa-github"
                  style={{ fontSize: "25px", margin: "10px 0" }}
                ></i>
              </a>
              <div>GitHub</div>
            </div>
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