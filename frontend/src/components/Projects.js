import React, { useState, useEffect } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

function Projects({ projects }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detectar tema inicial
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    setIsDarkMode(isDark);

    // Observar mudanças no tema
    const observer = new MutationObserver(() => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      setIsDarkMode(isDark);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    
    return () => observer.disconnect();
  }, []);

  const getImageUrl = (imageUrl) => {
    // Se a imagem for Simbolo.png, substituir por Simbolo 2.png no dark mode
    if (isDarkMode && imageUrl?.includes('Simbolo.png')) {
      return imageUrl.replace('Simbolo.png', 'Simbolo 2.png');
    }
    return imageUrl;
  };
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-title">
            <h2>Projetos</h2>
          </div>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Carregando projetos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projetos</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={getImageUrl(project.image)} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.live_url && (
                      <a 
                        href={project.live_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Ver Projeto"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
