import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo from './img/logo.png';

function Exames() {
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
        <h1>EXAMES</h1>
        <p>
            <br></br>
            Nesta secção, podes aceder aos enunciados e aos respetivos critérios de avaliação dos exames nacionais. 
            Esta página foi criada para facilitar-te o acesso a toda a informação necessária para o estudo e preparação 
            para os exames. Consultar estes documentos é essencial para que compreendas o formato das 
            provas e as competências exigidas, ajudando-te a preparar de forma mais eficaz para obteres os melhores 
            resultados.
            
        </p>
        <p>Além disso, o acesso aos critérios de avaliação permite-te obter uma visão mais clara sobre o que 
            é valorizado em cada prova, identificando os pontos fundamentais que podem contribuir para uma boa 
            classificação. Estes critérios ajudam-te a clarificar as expectativas dos examinadores, orientando-te para uma abordagem mais focada e organizada ao longo do seu estudo.</p>

            <p>
            Exames e Critérios 11º Ano: <a href="https://www.examesnacionais.com.pt/exames-nacionais-11-ano.php">Exames Nacionais</a><br />
            Exames e Critérios 12º Ano: <a href="https://www.examesnacionais.com.pt/exames-nacionais-12-ano.php">Exames Nacionais</a><br />
            Dicas de preparação: <a href="https://www.easyfuture.pt/post/exames-nacionais-dicas-de-prepara%C3%A7%C3%A3o">Easy Future</a><br />
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

export default Exames;
