import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import RTLogo from '../../media/RocketTeamLogoWhite.png';
import menuIcon from '../../media/icons/menuicon.svg';

const MobileNavigation = ({ subcategories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);

    const handleMenuClick = () => {
        if (activeSection) {
            setActiveSection(null);
        } else {
            setIsOpen(!isOpen);
        }
    };

    const handleSectionClick = (section, e) => {
        e.preventDefault();
        setActiveSection(section);
    };

    const handleBack = () => {
        setActiveSection(null);
    };

    const [activeLink, setActiveLink] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`mobile-nav ${isOpen ? "expanded" : ""} ${activeSection ? "showing-subcategory" : ""} ${scrolled ? "scrolled" : ""}`}>
            <div className="navContainer">
                <div className={`menuButton ${isOpen ? 'active' : ''}`} onClick={handleMenuClick}>
                    <img src={menuIcon} className="menuIconNav" alt="Menu"/>
                </div>
                <Link to="/"><img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/></Link>
                {/*<a href="https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry"*/}
                {/*   target="_blank" rel="noopener noreferrer">*/}
                {/*    <button className="givingDayButton" role="button">DONATE</button>*/}
                {/*</a>*/}
            </div>
            <div className="mobileContent">
                {!activeSection ? (
                    <div className="mobileLinks">
                        {/*<hr/>*/}
                        <Link to="/projects" onClick={(e) => handleSectionClick("Projects", e)}>Projects</Link>
                        {/*<hr/>*/}
                        <Link to="/outreach" onClick={(e) => handleSectionClick("Outreach", e)}>Outreach</Link>
                        {/*<hr/>*/}
                        <Link to="/leadership/current-leadership" onClick={(e) => handleSectionClick("Leadership", e)}>Leadership</Link>
                        {/*<hr/>*/}
                        <Link to="/new-members/new-members" onClick={(e) => handleSectionClick("New Members", e)}>New Members</Link>
                        {/*<hr/>*/}
                        <Link to="/new-members/new-members" onClick={(e) => handleSectionClick("New Members", e)}>DONATE</Link>

                    </div>

                ) : (
                    <div className="mobileSubcategories">
                        {subcategories[activeSection]?.map((section, idx) => (
                            <div key={idx} className="subcategorySection">
                                <h5>{section.header}</h5>
                                {section.links.map((link, linkIdx) => (
                                    <div key={linkIdx} className="subcategoryLink">
                                        {link.url ? (
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {link.name}
                                            </a>
                                        ) : (
                                            <Link to={link.path}>
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                        <button className="backButton" onClick={handleBack}>
                            Back
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MobileNavigation;