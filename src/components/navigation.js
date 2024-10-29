import React, { useState, useEffect } from 'react';
import '../App.css';
import './navigation.css';
import RTLogo from '../images/RocketTeamLogoWhite.png'

function Navigation() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) { // Adjust scroll threshold as needed
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="navContainer">
                <div className="links">
                    <img src={RTLogo} className="RTLogoNav"/>
                    <a>Home</a>
                    <a>Projects</a>
                    <a>Sponsors</a>
                    <a>New Members</a>
                </div>
                <button className="actionButton">Donate</button>
            </div>
        </nav>
    );
}

export default Navigation;
