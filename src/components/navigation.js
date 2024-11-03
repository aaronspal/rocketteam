import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/home.css';
import './navigation.css';
import RTLogo from '../images/RocketTeamLogoWhite.png';
// import Button from "./button";

const subcategories = {
    "Projects": [
        { header: "IREC 2025", links: [
                { name: "Vehicle Systems", path: "/irec/vehicle-systems" },
                { name: "Recovery", path: "/irec/recovery" },
                { name: "Payload", path: "/irec/payload" },
            ] },
        { header: "Technical Projects", links: [
                { name: "Avionics", path: "/technical-projects/avionics" },
                { name: "Ground Control Systems", path: "/technical-projects/ground-control-systems" },
                { name: "Thrust Vector Control", path: "/technical-projects/thrust-vector-control" },
                { name: "Simulations", path: "/technical-projects/simulations" },
            ] },
    ],
    "Outreach": [
        { header: "Outreach", links: [
                { name: "IREC Outreach", path: "/outreach/irec-outreach" },
                { name: "Cinematics", path: "/outreach/cinematics" },
            ] },
        { header: "Sponsors", links: [
                { name: "Our Sponsors", path: "/outreach/irec-outreach" },
                { name: "Become a Sponsor", path: "/outreach/cinematics" },
            ] },
    ],
    "Leadership": [
        { header: "Our Leadership", links: [
                { name: "Current Leadership", path: "/leadership/current-leadership" },
                { name: "Alumni", path: "/leadership/alumni" },
            ] },
    ],
    "New Members": [
        { header: "New Members", links: [
                { name: "How To Join", path: "/new-members/how-to-join" },
                { name: "Getting Started", path: "/new-members/getting-started" },
            ] },
        { header: "External Rescources", links: [
                { name: "Slack", path: "/new-members/how-to-join" },
                { name: "Events Calendar", path: "/new-members/getting-started" },
            ] },
    ]
};


function Navigation() {
    const [activeLink, setActiveLink] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    const handleMouseEnter = (link) => setActiveLink(link);
    const handleMouseLeave = () => setActiveLink(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav onMouseLeave={handleMouseLeave} className={`${activeLink ? "expanded" : ""} ${scrolled ? "scrolled" : ""}`}>
            <div className="navContainer">
                <div className="links">
                    <Link to="/"><img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/></Link>
                    <Link to="/projects" onMouseEnter={() => handleMouseEnter("Projects")}>Projects</Link>
                    <Link to="/sponsors" onMouseEnter={() => handleMouseEnter("Outreach")}>Outreach</Link>
                    <Link to="/sponsors" onMouseEnter={() => handleMouseEnter("Leadership")}>Leadership</Link>
                    <Link to="/new-members" onMouseEnter={() => handleMouseEnter("New Members")}>New Members</Link>
                </div>
                <a href="https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry" target="_blank" rel="noopener noreferrer"><button class="givingDayButton" role="button">DONATE</button></a>
                {/*<Button label={"DONATE"} link={"https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry"}/>*/}

            </div>

            {activeLink && subcategories[activeLink] && (
                <div className="subcategoryContainer">
                    {subcategories[activeLink].map((section, idx) => (
                        <div key={idx} className="subcategorySection">
                            <h5>{section.header}</h5>
                            {section.links.map((link, linkIdx) => (
                                <Link key={linkIdx} to={link.path}>
                                    {link.name}
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
