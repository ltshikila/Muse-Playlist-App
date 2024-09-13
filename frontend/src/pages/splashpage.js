// SplashPage.jsx
import React from 'react';
import './splashpage.css'; // Import your CSS file
import OpusLogo from '../../public/assets/images/logo.png'; // Make sure to replace with the actual path to your logo image
import { Link } from 'react-router-dom'; 

const SplashPage = () => {
    return (
        <div className="splash-container">
            <header className="splash-header">
                <img src={OpusLogo} alt="Opus Logo" className="opus-logo" />
                <Link to="login" className="signin-link">SIGN IN</Link>
            </header>
            <div className="splash-text">
                <h1>Be Your Own DJ</h1>
                <p>
                    Unleash your inner DJ with our playlist creator! Create and share the perfect mix for every mood, moment, and memory.
                    Whether you're vibing to chill tunes, powering through a workout, or throwing the ultimate party, we let you be the maestro
                    of your own musical journey. Time to compose your own opus!
                </p> 
            </div>
            <Link to="/signup">
            <button className="get-started-btn">Get Started</button>
            </Link>
        </div>
    );
};

export default SplashPage;
