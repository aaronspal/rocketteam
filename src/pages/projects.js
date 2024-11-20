import './projects.css';
import ProjectFeature from "../components/projectfeature";
import background from "../media/bluebackground.png";
import vehicleImage from "../media/vehicle-systems/loading.jpg";
import payloadImage from "../media/payload/payload.jpg";
import avionicsImage from "../media/avionics/avionics.png";
import groundControlSystems from "../media/ground-control-systems/gcs.jpg";
import simulationsImage from "../media/simulations/rocketsim.jpg";
import tvcImage from "../media/thrust-vector-control/IMG_1667.png"

import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import RTLogo from "../media/RocketTeamLogoWhite.png";

function Projects() {

    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                {/*<div className="overlay"></div>*/}
                <section className="pageHeadlineContainer">
                    <h2>PROJECTS</h2>
                </section>
            </section>
            <section className="contentContainer">
                <h3>Competition Teams</h3>
                <p>
                    The UCSC Rocket Team has a rich history competing in rocektry competitions since it's founding in
                    2017.
                    The team has previously competed in the NASA USLI competition, where it has placed high and even won
                    awards for outstanding design and sportsmanship in 2018, 2019, and 2021.
                </p>
                <p>
                    Beginning in 2024, the team has taken the step up to the International Rocketry Engineering
                    Challenge, formerly known as Spaceport America. Over 150 teams compete annually in what is widely
                    considered one of the largest and most prestigious competitions in the world.
                </p>
                <a href="https://www.soundingrocket.org/2025-irec.html"><span className="infoNote">Learn more about the International Rocketry Engineering Competition</span></a>

            </section>
            <Link to="/irec/vehicle-systems">
                <ProjectFeature photo={vehicleImage} team="Vehicle Systems" type="IREC Competition Team"
                    info="The heart of our project. The vehicle team designs and constructs the airframe of the rocket."
                />
            </Link>
            <Link to="/irec/payload">
                <ProjectFeature
                    photo={payloadImage} team="Payload" type="IREC Competition Team"
                    info="The soul of any rocket. The payload team designs what exactly will be going up with the Rocket. From drones to variable roll-control, this team does it all"
                />
            </Link>
            <section className="contentContainer">
                <h3>Project Teams</h3>
                <p>
                    In addition to our competition subteams, our team also works on projects to be integrated into a
                    future rocket.
                </p>
            </section>
            <Link to="/technical-projects/avionics">
                <ProjectFeature
                    photo={avionicsImage} team="Avionics" type="Project Team"
                    info="Percision control in high-powered rockets. Designed to gather and transmit data with dead-reckoning accuracy."
                />
            </Link>
            <Link to="/technical-projects/ground-control-systems">
                <ProjectFeature
                    photo={groundControlSystems} team="Ground Control Systems" type="Project Team"
                    info="Developing state-of-the-art visualization tool that can interpret real-time data."
                />
            </Link>
            <Link to="/technical-projects/thrust-vector-control">
                <ProjectFeature
                    photo={tvcImage} team="Thrust Vector Control" type="Project Team"
                    info="Reduce, Reuse, Recycle, Rockets."
                />
            </Link>
            <Link to="/technical-projects/simulations">
                <ProjectFeature
                    photo={simulationsImage} team="Simulations" type="Project Team"
                    info="Computer simulations involving: "
                />
            </Link>
        </section>
    )
}

export default Projects;