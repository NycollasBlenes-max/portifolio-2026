import React from 'react';
import { FaRobot, FaCogs, FaLaptopCode, FaBrain } from 'react-icons/fa';
import './Services.css';

function Services() {
  const services = [
    {
      icon: <FaRobot />,
      title: 'Agentes de IA',
      description: 'Desenvolvimento de agentes inteligentes que automatizam tarefas e tomam decisões de forma autônoma.'
    },
    {
      icon: <FaCogs />,
      title: 'Automação de Processos',
      description: 'Automatização de tarefas repetitivas para aumentar a produtividade e eficiência do seu negócio.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Sites Personalizados',
      description: 'Criação de sites únicos e modernos, desenvolvidos sob medida para sua marca e necessidades.'
    },
    {
      icon: <FaBrain />,
      title: 'Sistemas Inteligentes',
      description: 'Desenvolvimento de sistemas de gestão, análises, financeiro, comercial e controle sob medida para seu negócio.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Serviços</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
