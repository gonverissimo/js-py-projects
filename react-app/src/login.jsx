import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Login({ onLogin, registeredUsers }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se o utilizador está registado
    const user = registeredUsers.find(user => user.username === username);
    if (!user) {
      alert('O nome de utilizador que introduziste não está registado!');
      return;
    }

    // Verificar se a pass está correta
    if (user.password !== password) {
      alert('Password incorreta, tenta novamente!');
      return;
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="header-image" />
      <form onSubmit={handleSubmit} className="login-form">
        
        {/* Campo do Username */}
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

        {/* Campo da Password */}
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
            ></i>
          </div>
        </div>

        <button type="submit" className="login-button">Login</button>

        <div className="signup-prompt">
          <p>Ainda não tens uma conta? <Link to="/register">Regista-te aqui!</Link></p>
        </div>

        <div className="forgot-password">
          <p><Link to="/recoverpass">Esqueceste-te da password?</Link></p>
        </div>
      </form>
    </div>
  );
}

export default Login;