import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for links
import '../App.css';
import './navigation.css';
import RTLogo from '../images/RocketTeamLogoWhite.png';

function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [dropdownActive, setDropdownActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Define dropdown items for each nav link
    const dropdownContent = {
        Projects: [
            { category: "IREC 2025", items: [{ name: "VEHICLE SYSTEMS", link: "/project1" }, { name: "RECOVERY", link: "/project2" }, {name: "PAYLOAD", link: "/project3" }] },
            { category: "TECHNICAL PROJECTS", items: [{ name: "AVIONICS", link: "/project3" }, { name: "GROUND CONTROL SYSTEMS", link: "/project4" }, { name: "THRUST VECTOR CONTROL", link: "/project4" }, { name: "SIMULATIONS", link: "/project4" }] }
        ],
        Sponsors: [
            { category: "MAIN SPONSORS", items: [{ name: "Sponsor 1", link: "/sponsor1" }, { name: "Sponsor 2", link: "/sponsor2" }] }
        ],
        "New Members": [
            { category: "Resources", items: [{ name: "Resource 1", link: "/resource1" }, { name: "Resource 2", link: "/resource2" }] }
        ]
        // Add more as needed
    };

    return (
        <nav className={`${scrolled || dropdownActive ? 'scrolled' : ''}`}>
            <div className="navContainer">
                <div className="links">
                    <img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/>
                    {["Projects", "Sponsors", "Leadership", "New Members"].map((item) => (
                        <a key={item} onMouseEnter={() => {setHoveredItem(item);setDropdownActive(true);}} onMouseLeave={() => setDropdownActive(false)}>
                            {item}
                        </a>
                    ))}
                </div>
                <button className="actionButton">Donate</button>
            </div>

            {/* Dropdown Menu */}
            {hoveredItem && dropdownContent[hoveredItem] && (
                <div className="dropdownContainer" onMouseEnter={() => setDropdownActive(true)} onMouseLeave={() => {
                        setDropdownActive(false);
                        setHoveredItem(null);
                }}>
                    {dropdownContent[hoveredItem].map((section, idx) => (
                        <div key={idx} className="dropdownSection">
                            <strong>{section.category}</strong>
                            {section.items.map((subItem, idx) => (
                                <Link key={idx} to={subItem.link} className="dropdownItem">
                                    {subItem.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navigation;