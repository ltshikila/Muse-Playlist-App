// Header.jsx
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';
import OpusLogo from '../../public/assets/images/logo.png';
import searchicon from '../../public/assets/images/search.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
  }

  handleLogout = async () => {
    const username = this.props.username;

    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (response.ok) {
        this.props.history.push('/');
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('Error logging out. Please try again.');
    }
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSearchSubmit = () => {
    const { searchQuery } = this.state;
    if (searchQuery) {
      this.props.history.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  render() {
    return (
      <header className="songs-header">
        <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
        <div className="searchbar">
          <input
            type="text"
            className="search-input"
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
            aria-label="Search"
            placeholder="Search for playlists, songs, or users"
          />
          <img
            className="search-icon"
            alt="Search Icon"
            src={searchicon}
            onClick={this.handleSearchSubmit}
          />
        </div>
        <nav className="songs-nav">
          <Link to="/home/songs">Home</Link>
          <Link to="/profile/my">Profile</Link>
          <a href="#" onClick={this.handleLogout}>Logout</a>
        </nav>
      </header>
    );
  }
}

export default Header;
