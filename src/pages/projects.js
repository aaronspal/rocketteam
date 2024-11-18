import './projects.css';
import ProjectFeature from "../components/projectfeature";
import background from "../media/bluebackground.png";
import vehicleImage from "../media/vehicle-systems/loading.jpg";
import payloadImage from "../media/payload/payload.jpg";
import avionicsImage from "../media/avionics/avionics.png";
import splashImage from "../media/vehicle-systems/loading.jpg";
import React, {useEffect, useRef} from "react";

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
                    Challenge,
                    formerly known as Spaceport America.
                </p>
                <span className="infoNote">Learn more about the International Rocketry Engineering Competition</span>

            </section>
            <ProjectFeature
                photo={vehicleImage}
                team="Vehicle Systems"
                type="IREC Competition Team"
                info="The heart of our project. The vehicle team designs and constructs the airframe of the rocket."
            />
            <ProjectFeature
                photo={payloadImage}
                team="Payload"
                type="IREC Competition Team"
                info="The soul of any rocket. The payload team designs what exactly will be going up with the Rocket. From drones to variable roll-control, this team does it all"
            />
            <section className="contentContainer">
                <h3>Project Teams</h3>
                <p>
                    The UCSC Rocket Team has a rich history competing in rocektry competitions since it's founding in
                    2017.
                    The team has previously competed in the NASA USLI competition, where it has placed high and even won
                    awards for outstanding design and sportsmanship in 2018, 2019, and 2021.
                </p>
                <p>
                    Beginning in 2024, the team has taken the step up to the International Rocketry Engineering
                    Challenge,
                    formerly known as Spaceport America.
                </p>
            </section>
            <ProjectFeature
                photo={avionicsImage}
                team="Avionics"
                type="Project Team"
                info="Percision control in high-powered rockets. Designed to gather and transmit data with dead-reckoning accuracy."
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Ground Control Systems"
                type="Project Team"
                info="Creating a state-of-the-art application that can recieve and interpret real-time data."
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Thrust Vector Control"
                type="Project Team"
                info="Designing a rocket that can land exactly like SpaceX."
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Simulations"
                type="Project Team"
                info="Computer simulations involving: "
            />
        </section>
    )
}

export default Projects;