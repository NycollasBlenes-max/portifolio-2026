import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Header.css';

function Header({ profile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#services', label: 'Serviços' },
    { href: '#projects', label: 'Projetos' },
    { href: '#skills', label: 'Habilidades' },
    { href: '#about', label: 'Sobre' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <a href="#home" className="logo">
          {profile?.name?.split(' ')[0] || 'Portfolio'}
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div 
            className={`theme-switch ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <div className="switch-bg-icon sun-bg">
              <FaSun />
            </div>
            <div className="switch-bg-icon moon-bg">
              <FaMoon />
            </div>
            <div className="switch-thumb">
              {isDarkMode ? <FaMoon /> : <FaSun />}
            </div>
          </div>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Header;
