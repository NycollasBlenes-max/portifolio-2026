import React from 'react';
import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaDatabase } from 'react-icons/fa';
import { SiFlask, SiN8N } from 'react-icons/si';
import './Skills.css';

function Skills() {
  const technologies = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'n8n', icon: <SiN8N /> },
    { name: 'MySQL', icon: <FaDatabase /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Tecnologias</h2>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
