import '../projects.css';
import splashImage from "../../media/payload/payload.jpg"
import Skill from "../../components/skill";
import vehicleImage2 from "../../media/vehicle-systems/rocketlaunchfeb.jpg";
import SideNavigation from "../../components/sideNavigation";

function Payload() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>PAYLOAD</h2>
                    <h4>International Rocketry Engineering Competition</h4>
                </section>
            </section>
            <section className="contentContainer">
                <div className="flexContainer g30">
                    <SideNavigation/>
                    <div className="textContainer">
                        <h6>Overview</h6>
                        <p>
                            Throughout the 2023-2024 NASA SLI competition season, the payload team designed,
                            manufactured, and configured a large (minimum 5-lb) folding quadcopter drone. The goal of
                            this drone was to successfully land 3D-printed astronauts, known as STEMnauts, from a height
                            of 400 feet without using a parachute or streamer.
                        </p>
                        <p>
                            This year, the Payload Subteam will focus its research on a novel fin actuation design for
                            controlling the roll of a rocket, called Aerodynamic Fin Roll Control (AFRC). Our design
                            utilizes a capstan mechanism to ensure precise and accurate torque control. Additionally our
                            design follows a tail-end actuation instead of a wholle aft fin movement to allow for easier
                            integration into the rocket. Before this design is integrated into the main competition
                            vehicle for future competitions, we will simulate the roll of the rocket using the payload.
                        </p>
                    </div>
                </div>
                <section className="skills">
                    <h3>Skills used</h3>
                    <section className="row g10">
                        <Skill name="Computer Aid Design"/>
                        <Skill name="Control Theory"/>
                        <Skill name="C Language"/>
                        <Skill name="PID Control"/>
                        <Skill name="3D Printing"/>
                        <Skill name="PCB Design"/>
                    </section>
                </section>
                <div className="bentoContainer">
                    <div className="column">
                        <img src={splashImage} className="bentoImage"/>
                    </div>
                    <div className="column">
                        <img src={vehicleImage2} className="bentoImage"/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Payload;