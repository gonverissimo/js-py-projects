import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';



import logo from './img/logo.png';

function Tec() {
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
        <h1>Termos e Condições</h1>
        <br></br>
        <h3>1. Conteúdo da Plataforma</h3>
        <p>
        <br></br>
        Os materiais disponibilizados na plataforma Estudaki, incluindo resumos, vídeos, exercícios e discussões em fóruns, são para uso pessoal e educativo dos utilizadores.
        Todos os conteúdos são disponibilizados em conformidade com as diretrizes de uso justo e com respeito aos direitos de autor, indicando sempre a fonte da mesma.
        O uso adequado destes recursos promove uma experiência enriquecedora para todos os utilizadores da plataforma.
        </p>
        <br></br>
        <h3>2. Conteúdo Gerado pelo Utilizador</h3>
        <p>
        <br></br>
        Todo o conteúdo criado pelos utilizadores dentro da plataforma Estudaki, incluindo comentários, respostas e outras interações, permanece propriedade dos respectivos autores. 
        Espera-se que todos os utilizadores mantenham uma conduta respeitosa e colaborativa nos fóruns e secções de comentários. Conteúdos ofensivos, abusivos, que contenham spam ou infrinjam os direitos de terceiros serão removidos.
        </p>
        <br></br>
        <h3>3. Planos e Assinaturas</h3>
        <p>
        <br></br>
        O Estudaki oferece um plano Premium, que proporciona acesso a conteúdos exclusivos e recursos adicionais destinados a enriquecer a experiência de estudo e a complementar os materiais gratuitos da plataforma. Estes recursos premium estão disponíveis para utilizadores que decidam apoiar o Estudaki através de uma subscrição mensal.
        </p>
        <p>
        O custo atual do Plano Premium é de 1€ por mês. O valor da subscrição poderá ser ajustado consoante as necessidades da plataforma, sendo que qualquer alteração será comunicada antecipadamente.
        </p>
        <p>
        Os utilizadores podem cancelar a subscrição a qualquer momento, sendo que o cancelamento impede a renovação do pagamento para o ciclo mensal seguinte. Não haverá reembolsos para os valores já cobrados, e o cancelamento será efectivo para os meses subsequentes ao pedido de cancelamento.
        </p>
        <br></br>     
        <h3>4. Limitação de Responsabilidade</h3>
        <p>
        <br></br>
        O Estudaki compromete-se a fornecer materiais e conteúdos de qualidade, no entanto, não pode garantir que todos os conteúdos estejam constantemente actualizados ou livres de erros. A utilização das informações, resumos e exercícios disponibilizados na plataforma é da responsabilidade exclusiva do utilizador. O Estudaki não se responsabiliza por quaisquer danos, prejuízos ou perdas que possam resultar do uso dos conteúdos.
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

export default Tec;
