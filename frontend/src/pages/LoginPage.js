// LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import OpusLogo from '../../public/assets/images/logo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    name === 'username' ? setUsername(value) : setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('username', username);
        navigate('/home/songs'); // Use navigate instead of history.push
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
      <h2>Login</h2>
      <form 
        onSubmit={handleSubmit}
        className="form"
      >
        <input
          className="input"
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={handleInputChange}
          required
        />
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
