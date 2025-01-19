import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo from './img/logo.png';

function Lh() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeTab, setActiveTab] = useState({});

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMouseEnterDropdown = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeaveDropdown = () => {
    setDropdownVisible(false);
  };


  const toggleTab = (subject) => {
    setActiveTab((prevState) => ({
      ...prevState,
      [subject]: !prevState[subject]
    }));
  };

  return (
    <div className="home-page">
      <header className="home-header">
        <nav className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="header-image" />
          </Link>

          <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="navbar-link">Página Inicial</Link>

            <div className="dropdown" onMouseEnter={handleMouseEnterDropdown} onMouseLeave={handleMouseLeaveDropdown}>
              <Link to="#" className="navbar-link">Cursos</Link>
              {isDropdownVisible && (
                <div className="dropdown-content">
                  <Link to="/cursos/ct" className="dropdown-item">Ciências e Tecnologias</Link>
                  <Link to="/cursos/lh" className="dropdown-item">Línguas e Humanidades</Link>
                </div>
              )}
            </div>

            <Link to="/exames" className="navbar-link">Exames</Link>
            <Link to="/forum" className="navbar-link">Fórum</Link>
            <Link to="/premium" className="navbar-link">Premium</Link>
            <Link to="/sobre" className="navbar-link">Sobre</Link>
          </div>

          <div className="navbar-actions">
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="navbar-button primary">Register</button>
            </Link>
          </div>

          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </div>
        </nav>
      </header>

      <main className="main-content">
  <section className="subjects-section">
    <ul className="menu">
      {['Português', 'História A', 'Inglês', 'MACS', 'Filosofia', 'Geografia A'].map((subject) => (
        <li key={subject}>
          <div className="subject" onClick={() => toggleTab(subject)}>
            {subject}
          </div>

          {/* Submenu de anos escolares */}
          {activeTab[subject] && (
            <ul className="submenu">
              {subject === 'Português' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                  <li>12º Ano</li>
                </>
              )}
              {subject === 'História A' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                  <li>12º Ano</li>
                </>
              )}
              {subject === 'Inglês' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                </>
              )}
              {subject === 'MACS' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                </>
              )}
              {subject === 'Filosofia' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                </>
              )}
              {subject === 'Geografia A' && (
                <>
                  <li>10º Ano</li>
                  <li>11º Ano</li>
                </>
              )}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </section>
</main>

        

      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              contacto@estudaki.pt
            </p>
            <p>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              Portugal
            </p>
          </div>
          <div className="footer-right">
            <p><a href="/tec">Termos & Condições</a></p>
            <p><a href="/pdp">Política de Privacidade</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Estudaki. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Lh;
