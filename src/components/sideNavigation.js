import React from 'react';
import './sideNavigation.css';
import {Link} from "react-router-dom";

function SideNavigation({ active }) {
    return (
        <section className="sideNavigation">
            <h5>IREC 2025</h5>
            <Link to="/irec/vehichle-systems"><h6>Vehicle Systems</h6></Link>
            <hr/>
            <Link to="/irec/payload"><h6>Payload</h6></Link>
                <hr/><br></br>
            <h5>Technical Projects</h5>
            <Link to="/technical-projects/avionics"><h6>Avionics</h6></Link>
            <hr/>
            <Link to="/technical-projects/ground-control-systems"><h6>Ground Control Systems</h6></Link>
            <hr/>
            <Link to="/technical-projects/thrust-vector-control"><h6>Thrust Vector Control</h6></Link>
            <hr/>
            <Link to="/technical-projects/simulations"><h6>Simulations</h6></Link>
            <hr/>
        </section>
    );
}

export default SideNavigation;

