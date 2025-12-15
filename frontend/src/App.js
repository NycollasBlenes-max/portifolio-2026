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

const API_URL = 'http://localhost:5001/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
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
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <ThemeProvider>
        <div className="loading-screen">
          <div className="loader"></div>
          <p>Carregando...</p>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
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
      </div>
    </ThemeProvider>
  );
}

export default App;
