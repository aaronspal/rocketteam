import '../projects.css';
import splashImage from "../../media/avionics/avionics.png"
import BlazeImage from "../../media/avionics/blaze.png"
import SideNavigation from "../../components/sideNavigation";
import Skill from "../../components/skill";
import vehicleImage2 from "../../media/vehicle-systems/rocketlaunchfeb.jpg";

function Avionics() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>AVIONICS</h2>
                    <h4>Technical Project</h4>
                </section>
            </section>
            <section className="contentContainer">
                <div className="flexContainer">
                    <SideNavigation/>
                    <div className="textContainer">
                        <h6>Project Blaze</h6>
                        <p>
                            Project Blaze is advancing high-powered rocketry avionics to serve researchers, students,
                            professionals, and enthusiasts with an open-source approach to development. Blaze delivers a
                            comprehensive guidance, control, and data acquisition system, providing dependable control
                            and
                            high-fidelity data collection for rockets reaching up to 10 kilometers and experiencing
                            accelerations as high as 200 g's before data clipping, with built-in expandability to exceed
                            design
                            limits.
                        </p>
                        <p>
                            As a first-of-its-kind general-purpose avionics platform, Blaze was created with modularity
                            and
                            mission adaptability in mind, ensuring it meets the demands of varied rocketry applications.
                            Whether
                            for academic exploration, rigorous field testing, or personal projects, Blaze is equipped to
                            handle
                            diverse mission profiles, making advanced rocketry avionics more accessible than ever.
                        </p>
                    </div>
                </div>
                <section className="skills">
                    <h3>Skills used</h3>
                    <section className="row g10">
                        <Skill name="Computer Aid Design"/>
                        <Skill name="OpenRocket"/>
                        <Skill name="Control Fluid Dynamics"/>
                        <Skill name="Composites"/>
                        <Skill name="3D Printing"/>
                    </section>
                </section>
                {/*<div className="bentoContainer">*/}
                {/*    <div className="column">*/}
                {/*        <img src={splashImage} className="bentoImage"/>*/}
                {/*    </div>*/}
                {/*    <div className="column">*/}
                {/*        <img src={vehicleImage2} className="bentoImage"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <img src={BlazeImage} className="IMG100"/>
            </section>
        </section>
    )
}

export default Avionics;