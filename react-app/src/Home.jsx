import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo from './img/logo.png';

function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false); // Estado para o menu hamburguer
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMouseEnterDropdown = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeaveDropdown = () => {
    setDropdownVisible(false);
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

          {/* Ícone de menu hamburguer para mobile */}
          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </div>
        </nav>
      </header>

      
      <main className="main-content">
      <section className="features-section">
    <div className="text-box">
      <h1>A tua preparação começa aqui!</h1>
              <br></br>
      
      <div className="features-grid">
      <div className="feature-item">
        <i className="fas fa-book-open"></i>
        <h4>Conteúdo Abrangente</h4>
        <br></br>
        <p>Encontra resumos, vídeos e exercícios de todas as disciplinas do secundário.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-users"></i>
        <h4>Comunidade Ativa</h4>
        <br></br>
        <p>Partilha experiências e aprende com outros estudantes no nosso fórum.</p>
      </div>
      <div className="feature-item">
        <i className="fas fa-star"></i>
        <h4>Plano Premium</h4>
        <br></br>
        <p>Acede a conteúdos exclusivos e apoia o desenvolvimento da plataforma.</p>
      </div>
    </div>
    
      </div>
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

export default Home;
