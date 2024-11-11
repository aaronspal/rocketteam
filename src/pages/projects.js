import './projects.css';
import ProjectFeature from "../components/projectfeature";
import background from "../media/bluebackground.png";
import vehicleImage from "../media/vehicle-systems/loading.jpg";
import payloadImage from "../media/payload/payload.jpg";
import avionicsImage from "../media/avionics/avionics.png";
import splashImage from "../media/vehicle-systems/loading.jpg";

function Projects() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                {/*<div className="overlay"></div>*/}
                <section className="headlineContainer">
                    <h2>PROJECTS</h2>
                </section>
            </section>
            <section className="contentContainer">
                <h4>Competition Teams</h4>
                <p>
                    Rocket Team competes annually in the International Rocketry Engineering Competition (IREC).
                </p>
            </section>
            <ProjectFeature
                photo={vehicleImage}
                team="Vehicle Systems"
                type="IREC Competition Team"
                info="Testing shit out"
            />
            <ProjectFeature
                photo={payloadImage}
                team="Payload"
                type="IREC Competition Team"
                info="Testing shit out"
            />
            <section className="contentContainer">
                <h4>Project Teams</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum
                </p>
            </section>
            <ProjectFeature
                photo={avionicsImage}
                team="Avionics"
                type="Project Team"
                info="Testing shit out"
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Ground Control Systems"
                type="Project Team"
                info="Testing shit out"
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Thrust Vector Control"
                type="Project Team"
                info="Testing shit out"
            />
            <ProjectFeature
                photo={vehicleImage}
                team="Simulations"
                type="Project Team"
                info="Testing shit out"
            />
        </section>
    )
}

export default Projects;