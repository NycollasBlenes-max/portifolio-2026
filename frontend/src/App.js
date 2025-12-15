import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const API_URL = '/api';

// Dados padrão para fallback
const DEFAULT_PROFILE = {
  name: "Nycollas Blenes",
  title: "Desenvolvedor Full Stack | IA & Automação",
  skills: [
    {"name": "Python", "level": 90},
    {"name": "JavaScript", "level": 85},
    {"name": "React", "level": 80},
    {"name": "Flask", "level": 85},
    {"name": "SQL", "level": 75},
    {"name": "Docker", "level": 70},
    {"name": "Git", "level": 85}
  ],
  email: "cnycollasblenes@gmail.com",
  github: "https://github.com/NycollasBlenes-max",
  linkedin: "https://www.linkedin.com/in/nycollas-blenes-6a2065262/"
};

const DEFAULT_PROJECTS = [
  {
    "id": 1,
    "title": "Gerente: Minha Loja",
    "description": "O gerente: Minha loja é uma plataforma projetado para a empresa Rede Confiança com uma interface rápida e centralizada que permite aos gerentes acompanhar a performance da loja em tempo real, padronizando o acesso e melhorando a navegação das lideranças operacionais.",
    "technologies": [],
    "image": "/Simbolo.png",
    "live_url": "https://portifolio-portifolio-gerentes.swntp9.easypanel.host/"
  },
  {
    "id": 2,
    "title": "Painel de Performance",
    "description": "O Painel de Performance é uma plataforma projetado para a empresa Rede Confiança analisar e acompanhar, em tempo real, os indicadores comerciais por loja, coordenação e colaborador, auxiliando na tomada de decisão e no controle de metas.",
    "technologies": [],
    "image": "/Simbolo.png",
    "live_url": "https://portifolio-portifolio-performance.swntp9.easypanel.host/"
  },
  {
    "id": 3,
    "title": "Interlojas Cup",
    "description": "A Interlojas Cup é uma plataforma interativa projetado para a empresa Rede Confiança para divulgar resultados de campeonatos entre lojas, promovendo engajamento, espírito de equipe e reconhecimento de desempenho por meio da gamificação.",
    "technologies": [],
    "image": "/campeonato.png",
    "live_url": "https://rede-confianca-interlojas.lpl0df.easypanel.host/"
  },
  {
    "id": 4,
    "title": "Painel Financeiro",
    "description": "O Painel financeiro é uma plataforma projetado para a empresa Rede Confiança, interativa e visualmente atrativa para gerenciar, acompanhar e analisar as movimentações financeiras da empresa.",
    "technologies": [],
    "image": "/Simbolo.png",
    "live_url": "https://portifolio-portifolio-financeiro.swntp9.easypanel.host/"
  }
];

function App() {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [projects, setProjects] = useState(DEFAULT_PROJECTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, projectsRes] = await Promise.all([
          axios.get(`${API_URL}/profile`),
          axios.get(`${API_URL}/projects`)
        ]);
        setProfile(profileRes.data);
        setProjects(projectsRes.data);
      } catch (error) {
        console.error('Erro ao carregar dados da API:', error);
        // Usar dados padrão se a API falhar
        setProfile(DEFAULT_PROFILE);
        setProjects(DEFAULT_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        {loading ? (
          <div className="loading-screen">
            <div className="loader"></div>
            <p>Carregando...</p>
          </div>
        ) : (
          <>
            <Header profile={profile} />
            <main>
              <Hero profile={profile} />
              <Services />
              <Projects projects={projects} />
              <Skills skills={profile?.skills || []} />
              <About profile={profile} />
              <Contact profile={profile} />
            </main>
            <Footer profile={profile} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
