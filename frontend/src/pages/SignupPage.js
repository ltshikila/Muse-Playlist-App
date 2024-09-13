// SignupPage.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css'; // Add appropriate path to your CSS file
import OpusLogo from '../../public/assets/images/logo.png';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;

    return (
      <div className="signup-page">
        <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
        <h2>Sign Up</h2>
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
            type="email"
            name="email"
            value={email}
            placeholder="Email"
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
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={this.handleInputChange}
            required
          />
          <Link to="/home/songs">
            <button type="submit">Sign Up</button>
          </Link>

        </form>
      </div>
    );
  }
}

export default SignupPage;
