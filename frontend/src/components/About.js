import React from 'react';
import './About.css';

function About({ profile }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>Sobre Mim</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou desenvolvedor com 1 ano de experiência prática no mercado, especializado 
              em automações, integrações e construção de soluções eficientes. Trabalho com  
              <span className="tech-highlight"> Python</span>, <span className="tech-highlight">n8n</span>, <span className="tech-highlight">JavaScript</span>, <span className="tech-highlight">Flask</span>, <span className="tech-highlight">HTML5</span>, <span className="tech-highlight">CSS3</span> e <span className="tech-highlight">MySQL</span>, unindo backend, frontend 
              e automações inteligentes para criar sistemas robustos e processos otimizados.
            </p>
            <p>
              Atualmente curso <span className="tech-highlight">Análise e Desenvolvimento de Sistemas (2024-2026)</span>, sempre buscando evoluir 
              e explorar novas tecnologias. Meu foco é transformar problemas reais em soluções 
              funcionais, escaláveis e de alto impacto para empresas e usuários.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
