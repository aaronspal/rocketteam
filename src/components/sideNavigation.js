import React from 'react';
import './sideNavigation.css';
import {Link} from "react-router-dom";

function SideNavigation({ active }) {
    return (
        <section className="sideNavigation">
            <h5>IREC 2025</h5>
            <Link to="/outreach"><h6>Vehicle Systems</h6></Link>
            <hr/>
            <Link to="/outreach"><h6>Payload</h6></Link>
                <hr/><br></br>
            <h5>Technical Projects</h5>
            <Link to="/outreach"><h6>Avionics</h6></Link>
            <hr/>
            <Link to="/outreach"><h6>Ground Control Systems</h6></Link>
            <hr/>
            <Link to="/outreach"><h6>Thrust Vector Control</h6></Link>
            <hr/>
            <Link to="/outreach"><h6>Simulations</h6></Link>
            <hr/>
        </section>
    );
}

export default SideNavigation;

