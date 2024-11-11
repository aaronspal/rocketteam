import '../projects.css';
import '../../libraries/bentogrids.css';
import splashImage from "../../media/vehicle-systems/loading.jpg"
import wireframe from "../../media/vehicle-systems/LeWireframe.png"
import Skill from "../../components/skill"

function VehicleSystems() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>VEHICLE SYSTEMS</h2>
                    <h4>International Rocketry Engineering Competition</h4>
                </section>
            </section>
            <section className="contentContainer">
                <figure><img src={wireframe} className="wireframe"/></figure>
                <figcaption>Celsius 01 Fullscale Design, 2023</figcaption>
                <h6>Overview</h6>
                <p>
                    The Vehicle Systems Team leads the design, manufacturing, and testing
                    of the main launch vehicle, including critical components like the
                    airframe, fins, and propulsion system. Our team prioritizes structural
                    integrity, propulsion efficiency, and overall flight readiness throughout
                    each stage of the design and building process.
                </p>
                <p>
                    We are also responsible for designing and implementing the rocket’s
                    recovery system to ensure a safe descent and recovery after flight.
                    This includes preparing ejection charges for each separation event,
                    determining optimal parachute sizing, and analyzing flight data. Utilizing
                    OpenRocket flight software, we examine how factors such as altitude,
                    wind conditions, descent rate, and stability impact the rocket performance
                    during flight.
                </p>
                <h6>Recovery</h6>
                <p>
                    The Vehicle Systems Team leads the design, manufacturing, and testing
                    of the main launch vehicle, including critical components like the
                    airframe, fins, and propulsion system. Our team prioritizes structural
                    integrity, propulsion efficiency, and overall flight readiness throughout
                    each stage of the design and building process.
                </p>
                <h1>Skills used</h1>
                <section className="row g10">
                    <Skill name="Computer Aid Design"/>
                    <Skill name="OpenRocket"/>
                    <Skill name="Control Fluid Dynamics"/>
                    <Skill name="Composites"/>
                    <Skill name="3D Printing"/>
                </section>
            </section>
        </section>
    )
}

export default VehicleSystems;