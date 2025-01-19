import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



import logo from './img/logo.png';

function Premium() {
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
          <h1>PREMIUM</h1>
          <p>
         <br></br>
            Através do plano Premium do Estudaki, podes levar a tua preparação académica a um novo patamar, 
            com acesso a conteúdos adicionais que vão enriquecer a tua experiência de estudo. Pensado para quem pretende 
            um apoio mais robusto, o Premium oferece-te recursos exclusivos, como resoluções detalhadas de exames e exercícios 
            focados nas disciplinas de Matemática, Português e Inglês – tudo com o objetivo de te ajudar a enfrentar desafios 
            académicos com confiança.

            <br></br><br></br>
            Por apenas 1€ mensais, ao subscreveres o nosso plano premium (segue os passos na nossa plataforma), terás acesso a uma coleção de materiais exclusivos 
            que vão ao encontro das necessidades de alunos que querem consolidar o seu conhecimento e aprimorar o seu desempenho 
            nos exames e testes. Este contributo não só te dá acesso a conteúdos únicos, mas também permite que a plataforma 
            continue a crescer e a ser constantemente atualizada com novos materiais de qualidade.

            <br></br><br></br>
            Uma das vantagens do plano Premium é o acesso ao nosso apoio personalizado. Podes esclarecer dúvidas diretamente, 
            além de contar com a resolução de exercícios específicos colocados pelos estudantes no nosso fórum. Esta 
            funcionalidade permite-te enviar questões e desafios que encontras durante o estudo, com a garantia de que 
            receberás respostas detalhadas e adaptadas às tuas necessidades.

            <br></br><br></br>
            No Estudaki, acreditamos que o teu sucesso é uma jornada que merece o melhor apoio. Ao escolheres o plano Premium, 
            estás a investir em ti e no teu futuro, contando com uma plataforma que se dedica a tornar o teu percurso académico 
            mais fácil e eficaz. Juntos, estamos a criar um ambiente de aprendizagem acessível e motivador!
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

export default Premium;
