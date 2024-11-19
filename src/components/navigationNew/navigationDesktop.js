import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RTLogo from '../../media/RocketTeamLogoWhite.png';
import RocketIcon from '../../media/icons/rocket.svg';
import OutreachIcon from '../../media/icons/outreach.svg';
import LeadershipIcon from '../../media/icons/leadership.svg';
import NewMembersIcon from '../../media/icons/newperson.svg';

// Create an object to map sections to their icons
const sectionIcons = {
    "Projects": RocketIcon,
    "Outreach": OutreachIcon,
    "Leadership": LeadershipIcon,
    "New Members": NewMembersIcon
};

const DesktopNavigation = ({ subcategories }) => {
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
        <nav onMouseLeave={handleMouseLeave} className={`desktop-nav ${activeLink ? "expanded" : ""} ${scrolled ? "scrolled" : ""}`}>
            <div className="navContainer">
                <div className="links">
                    <Link to="/"><img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/></Link>
                    <Link to="/projects" onMouseEnter={() => handleMouseEnter("Projects")}>Projects</Link>
                    <Link to="/outreach" onMouseEnter={() => handleMouseEnter("Outreach")}>Outreach</Link>
                    <Link to="/leadership/current-leadership" onMouseEnter={() => handleMouseEnter("Leadership")}>Leadership</Link>
                    <Link to="/new-members/new-members" onMouseEnter={() => handleMouseEnter("New Members")}>New Members</Link>
                </div>
                <a href="https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry"
                   target="_blank" rel="noopener noreferrer">
                    <button className="givingDayButton" role="button">DONATE</button>
                </a>
            </div>
            {activeLink && subcategories[activeLink] && (
                <div className="subcategoryContainer">
                    <img
                        src={sectionIcons[activeLink]}
                        className="navIcon"
                        alt={`${activeLink} icon`}
                    />
                    {subcategories[activeLink].map((section, idx) => (
                        <div key={idx} className="subcategorySection">
                            <h5>{section.header}</h5>
                            {section.links.map((link, linkIdx) => (
                                link.url ? (
                                    <a key={linkIdx} href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link key={linkIdx} to={link.path}>
                                        {link.name}
                                    </Link>
                                )
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default DesktopNavigation;