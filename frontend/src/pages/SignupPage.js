// SignupPage.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css'; 
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

  handleSubmit = async (event) => {
    event.preventDefault();
    
    const { username, email, password, confirmPassword } = this.state;
  
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful signup (e.g., redirect to login or home page)
        alert(data.message);
        this.props.history.push('/home/songs'); 
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };
  

  render() {
    const { username, email, password, confirmpassword } = this.state;

    return (
      <div className="signup-page">
        <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleInputChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleInputChange}
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleInputChange}
            required
          />
          <input
            className="input"
            type="password"
            name="confirmPassword"
            value={confirmpassword}
            placeholder="Confirm Password"
            onChange={this.handleInputChange}
            required
          />
          
            <button type="submit" className="button">Sign Up</button>
          

        </form>
      </div>
    );
  }
}

export default SignupPage;
