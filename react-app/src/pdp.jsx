import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



import logo from './img/logo.png';

function Pdp() {
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
        <br />
        <h1>Política de Privacidade</h1>
        <br></br>
        <h3>1. Recolha e Utilização de Informações</h3>
        <p>
        <br></br>
        O Estudaki, no que trata a armazenamento de dados pessoais dos utilizadores, apenas armazena o teu username, e-mail e password que inseriste na nossa plataforma.
        </p>
        <br></br>
        <h3>2. Dados Pessoais e Comunicação</h3>
        <p>
        <br></br>
        O Estudaki não tem acesso a informações financeiras dos utilizadores visto que o pagamento que realizas é fora da nossa plataforma.
        </p>
        <br></br>
        <h3>3. Direitos dos Utilizadores</h3>
        <p>
        <br></br>
        Os utilizadores que desejem aceder, corrigir ou eliminar os seus dados pessoais e a sua conta, devem contactar-nos. Para outras questões, o Estudaki está disponível através do e-mail <a href="mailto:estudaki@outlook.pt">contacto@estudaki.pt</a>.
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

export default Pdp;
