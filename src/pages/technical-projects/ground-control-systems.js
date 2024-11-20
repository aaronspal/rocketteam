import '../projects.css';
import splashImage from "../../media/avionics/avionics.png"
import BlazeImage from "../../media/avionics/blaze.png"
import SideNavigation from "../../components/sideNavigation";
import Skill from "../../components/skill";
import vehicleImage2 from "../../media/vehicle-systems/rocketlaunchfeb.jpg";

function GroundControlSystems() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>Ground Control Systems</h2>
                    <h4>Technical Project</h4>
                </section>
            </section>
            <section className="contentContainer">
                <div className="flexContainer g30">
                    <SideNavigation/>
                    <div className="textContainer">
                        <h6>Overview</h6>
                        <p>
                            The Ground Control System (GCS) team at UCSC Rocketry plays a pivotal role in ensuring the
                            success of our rocket missions by developing and maintaining cutting-edge software solutions.
                            Our work encompasses data visualization, creating intuitive and interactive displays that help
                            monitor the rocket’s performance in real time. We excel in data logging and analysis, capturing
                            and interpreting critical telemetry to inform decision-making during launches. The team also
                            implements real-time alerts to notify operators of anomalies, ensuring rapid responses to
                            potential issues. Through centralized control, we streamline mission operations, while
                            calibration tools ensure all sensors and systems function with precision. In addition, we
                            bring creativity and usability to the forefront with Figma design for UI/UX, integrate mapping
                            systems for enhanced situational awareness, and employ web development to build robust platforms
                            that tie all these elements together.
                        </p>
                    </div>
                </div>
                <section className="skills">
                    <h3>Skills used</h3>
                    <section className="row g10">
                        <Skill name="Figma"/>
                        <Skill name="React"/>
                        <Skill name="Data Logging"/>
                        <Skill name="Data Analysis"/>
                        <Skill name="Data Visualization"/>
                    </section>
                </section>
                <img src={BlazeImage} className="IMG100"/>
            </section>
        </section>
    )
}

export default GroundControlSystems;