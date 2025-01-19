import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from './img/logo.png'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

// Função para validar a força da senha
const isStrongPassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isValidLength = password.length >= 8;

  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isValidLength;
};

// Função para validar o email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar o formato do email
  return emailRegex.test(email);
};

function Register({ onRegister, registeredUsers }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Para ver ou ocultar a senha
  const [agreeTerms, setAgreeTerms] = useState(false); // Para o checkbox
  const [errorMessage, setErrorMessage] = useState(''); // Para mensagens de erro

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(''); 

    // Verifica se o nome de utilizador já foi registado
    if (registeredUsers.some(user => user.username === username)) {
      alert('Este nome de utilizador já foi utilizado, escolhe outro!'); 
      return;
    }

    // Verifica se o email é válido
    if (!isValidEmail(email)) {
      alert('Insere um email válido!'); 
      return;
    }

    // Verifica se a senha é forte
    if (!isStrongPassword(password)) {
      alert('A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais!');
      return;
    }

    // Verifica se a senha e a confirmação são iguais
    if (password !== confirmPassword) {
      alert('As passwords não coincidem!'); 
      return;
    }

    // Se passar nas verificações, chama a função de registo
    onRegister(username, email, password);
  };

  return (
    <div className="register-container">
      <img src={logo} alt="Logo" className="header-image" />
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <div className="input-with-icon">
            <input
              type="text"
              placeholder="Introduz o teu username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <i className="fas fa-user username-icon"></i>
          </div>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <input
              type="email"
              placeholder="Introduz o teu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="fas fa-envelope email-icon"></i>
          </div>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Introduz a tua password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="fas fa-key password-icon"></i>
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-icon2`}
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }}
            ></i>
          </div>
        </div>
        <div className="form-group">
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirma a tua password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i className="fas fa-check-circle confirm-password-icon"></i>
          </div>
        </div>
        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
            required
          />
          <label>
            Concordo com os <Link to="/tec">Termos & Condições</Link> e com a <Link to="/pdp">Política de Privacidade</Link>.
          </label>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="register-button">Registar</button>
        
        <div className="login-prompt">
         <span style={{ color: 'white' }}>
            Já tens uma conta? Dá <Link to="/login" className="login-link">Login aqui</Link>!
        </span>
        </div>
      </form>
    </div>
  );
}

export default Register;