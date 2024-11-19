import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../pages/home.css';
import './navigation.css';
import RTLogo from '../media/RocketTeamLogoWhite.png';
import menuIcon from '../media/icons/menuicon.svg';
// import Button from "./button";

const subcategories = {
    "Projects": [
        { header: "IREC 2025", links: [
                { name: "Vehicle Systems", path: "/irec/vehicle-systems" },
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
                { name: "Outreach", path: "/outreach/outreach" },
                { name: "Media", path: "/outreach/cinematics" },
            ] },
        { header: "Sponsors", links: [
                { name: "Our Sponsors", path: "/outreach/outreach" },
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
        // { header: "External Rescources", links: [
        //         { name: "Slack", path: "/new-members/how-to-join" },
        //         { name: "Events Calendar", path: "/new-members/getting-started" },
        //     ] }
        { header: "External Resources", links: [
                    { name: "Slack", url: "https://rocketslug.slack.com" }, // replace with actual Slack link
                    { name: "Events Calendar", url: "https://calendar.google.com/calendar/u/1?cid=MzE0NnRvaXNuZmhqYnEyY3N1cHI4ZTZyam9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" }, // replace with actual Google Calendar link
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
                <div className="menuButton navItems">
                    <img src={menuIcon} className="menuIconNav" alt="Rocket Team Logo"/>
                </div>
                <img src={RTLogo} className="RTLogoNav navItems" alt="Rocket Team Logo"/>
                <div className="links">
                    <Link to="/"><img src={RTLogo} className="RTLogoNav" alt="Rocket Team Logo"/></Link>
                    <Link to="/projects" onMouseEnter={() => handleMouseEnter("Projects")}>Projects</Link>
                    <Link to="/outreach" onMouseEnter={() => handleMouseEnter("Outreach")}>Outreach</Link>
                    <Link to="/leadership/current-leadership" onMouseEnter={() => handleMouseEnter("Leadership")}>Leadership</Link>
                    <Link to="/new-members/new-members" onMouseEnter={() => handleMouseEnter("New Members")}>New Members</Link>
                </div>
                <a href="https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry"
                   target="_blank" rel="noopener noreferrer">
                    <button class="givingDayButton" role="button">DONATE</button>
                </a>
                {/*<Button label={"DONATE"} link={"https://www.givecampus.com/schools/UniversityofCaliforniaSantaCruz/giving-day-2024/pages/ucscrocketry"}/>*/}
            </div>
            {activeLink && subcategories[activeLink] && (
                <div className="subcategoryContainer">
                    {subcategories[activeLink].map((section, idx) => (
                        <div key={idx} className="subcategorySection">
                            <h5>{section.header}</h5>
                            {/*{section.links.map((link, linkIdx) => (*/}
                            {/*    <Link key={linkIdx} to={link.path}>*/}
                            {/*        {link.name}*/}
                            {/*    </Link>*/}
                            {/*))}*/}
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
}
export default Navigation;