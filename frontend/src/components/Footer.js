import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Nycollas Blenes Curto Ferreira
            </a>
          </div>

          <div className="footer-social">
            <div className="social-icons">
              {profile?.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
              {profile?.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              <a href="https://wa.me/5527995739439" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Nycollas Blenes</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
