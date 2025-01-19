import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



import logo from './img/logo.png';

function Sobre() {
  const [isMenuOpen, setMenuOpen] = useState(false); 
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

          <div className="navbar-toggle" onClick={toggleMenu}>
            <span className="navbar-toggle-icon">&#9776;</span>
          </div>
        </nav>
      </header>

      
      <main className="main-content">
        <section className="about-section">
        <br></br>
          <h1>SOBRE</h1>
          <p>
         <br></br>
          O Estudaki foi fundado por um jovem já licenciados que, tal e qual como tu, passou pelo ensino secundário.
          Sei bem as dificuldades que encontras na procura de recursos úteis e relevantes para te preparares para testes e exames, por isso decidi criar uma plataforma que reúne tudo o que considero essencial num único lugar. A minha missão é facilitar a tua jornada de aprendizagem, proporcionando um acesso simplificado a materiais que podem fazer a diferença no teu desempenho académico.
          </p>
        <br></br>
        <p>
          No Estudaki, encontrarás uma vasta gama de recursos, desde resumos, vídeos e exercícios até fóruns de discussão, tudo pensado para te ajudar a estudar de forma mais eficaz e a poupar tempo na procura de informações. Quero que tenhas tudo à tua disposição, para que possas concentrar-te no que realmente importa: o teu sucesso académico.
          </p>
          <br></br>
          <p>
          Além disso, apresento o plano Premium, que é uma forma de levares a tua experiência de estudo a um nível superior. Ao subscreveres, terás acesso a conteúdo exclusivo e recursos adicionais que não estão disponíveis para os utilizadores regulares.
          Com apenas uma pequena contribuição de 1€ mensais, ajudas a manter a plataforma atualizada e cheia de novos conteúdos.
          </p>

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

export default Sobre;
