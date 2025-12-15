import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './Hero.css';

function Hero({ profile }) {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Olá, meu nome é</p>
          <h1 className="hero-name">{profile?.name || 'Desenvolvedor'}</h1>
          <h2 className="hero-title">{profile?.title || 'Full Stack Developer'}</h2>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              Ver Projetos
            </a>
            <a href="#contact" className="btn btn-outline">
              Entrar em Contato
            </a>
          </div>

          <div className="hero-social">
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

        <div className="hero-visual">
          <div className="hero-image">
            <img 
              src="https://em-content.zobj.net/source/microsoft-teams/363/man-technologist-medium-skin-tone_1f468-1f3fd-200d-1f4bb.png" 
              alt="Developer"
              className="developer-img"
            />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
