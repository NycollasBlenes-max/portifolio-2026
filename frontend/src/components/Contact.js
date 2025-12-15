import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

function Contact({ profile }) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Entre em Contato</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              <a href={`mailto:${profile?.email}`} className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <span>{profile?.email}</span>
                </div>
              </a>

              <a href={profile?.github} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <span>@nycollasblenes</span>
                </div>
              </a>

              <a href={profile?.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <span>Nycollas Blenes</span>
                </div>
              </a>

              <a href="https://wa.me/5527995739439" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <span>(27) 99573-9439</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
