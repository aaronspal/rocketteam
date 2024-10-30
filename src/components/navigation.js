import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './navigation.css';
import RTLogo from '../images/RocketTeamLogoWhite.png';

const subcategories = {
    "Projects": [
        { header: "IREC 2024", links: ["Vehicle Systems", "Recovery", "Payload"] },
        { header: "Technical Projects", links: ["Avionics", "Ground Control Systems", "Thrust Vector Control", "Simulations"] }
    ],
    "Outreach": [
        { header: "Outreach", links: ["IREC Outreach", "Cinematics"] },
        { header: "Sponsors", links: ["Current Sponsors", "Become a Sponsor"] }
    ],
    "Leadership": [
        { header: "Our Leadership", links: ["Current Leadership", "Alumni"] },
    ],
    "New Members": [
        { header: "New Members", links: ["How To Join", "Getting Started"] },
        { header: "Upcoming Events", links: ["Events Calendar"] }
    ]
};

function Navigation() {
    const [activeLink, setActiveLink] = useState(null);

    const handleMouseEnter = (link) => {
        setActiveLink(link);
    };

    const handleMouseLeave = () => {
        setActiveLink(null);
    };

    return (
        <nav onMouseLeave={handleMouseLeave} className={activeLink ? "expanded" : ""}>
            <div className="navContainer">
                <div className="links">
                    <Link to="/"><img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/></Link>
                    <Link to="/projects" onMouseEnter={() => handleMouseEnter("Projects")}>Projects</Link>
                    <Link to="/sponsors" onMouseEnter={() => handleMouseEnter("Outreach")}>Outreach</Link>
                    <Link to="/sponsors" onMouseEnter={() => handleMouseEnter("Leadership")}>Leadership</Link>
                    <Link to="/new-members" onMouseEnter={() => handleMouseEnter("New Members")}>New Members</Link>
                </div>
                <button className="actionButton">Donate</button>
            </div>

            {activeLink && subcategories[activeLink] && (
                <div className="subcategoryContainer">
                    {subcategories[activeLink].map((section, idx) => (
                        <div key={idx} className="subcategorySection">
                            <h5>{section.header}</h5>
                            {section.links.map((link, linkIdx) => (
                                <Link key={linkIdx} to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}>
                                    {link}
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
