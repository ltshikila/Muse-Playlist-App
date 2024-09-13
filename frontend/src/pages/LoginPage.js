// LoginPage.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './LoginPage.css'; // Add appropriate path to your CSS file
import OpusLogo from '../../public/assets/images/logo.png';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-page">
        <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />
          <Link to="/home/songs">
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default LoginPage;
