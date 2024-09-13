import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';
import OpusLogo from '../../public/assets/images/logo.png';
import searchicon from '../../public/assets/images/search.png';

class Header extends Component {
        render() { 
        return (
            <header className="songs-header">

                <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />

                <div className="searchbar">
                    <input
                        type="text"
                        className="search-input"
                        aria-label="Search"
                    />
                    <img className="search-icon" alt="Search Icon" src={searchicon} />
                </div>
                <nav className="songs-nav">
                    <Link to="/home/songs">Home</Link>
                    <Link to="/profile/my">Profile</Link>
                    <Link to="/">Logout</Link>
                </nav>
            </header>
        );
    }
}
 
export default Header ;