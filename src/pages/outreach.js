import './projects.css';
import ProjectFeature from "../components/projectfeature";
import SideNavigation from "../components/sideNavigation";
import Skill from "../components/skill";
import outreachImage from "../media/outreach/IMG_0379.jpg";

function Avionics() {
    return (
        <section>
            <ProjectFeature
                photo={outreachImage}
                team="Outreach"
                type="Administrative Team"
            />
            <section className="contentContainer">
                <div className="flexContainer g30">
                    <SideNavigation/>
                    <div className="textContainer">
                        <h6>Overview</h6>
                        <p>
                            The Outreach team at UCSC Rocketry is dedicated to fostering community engagement and sharing our
                            mission with the world. We specialize in photography and videography, capturing the excitement of rocket
                            launches and team activities to inspire audiences. Through social media and content creation, we craft
                            compelling stories, updates, and visuals that showcase our progress and achievements. Our team actively
                            pursues collaborations with organizations and individuals to expand our impact and resources. We embrace
                            opportunities like MESA (Mathematics, Engineering, Science Achievement) partnerships and teaching
                            engagements, inspiring the next generation of engineers and scientists. By volunteering and organizing
                            events, we connect with the community, celebrate our passion for aerospace, and build lasting
                            relationships
                            that support our mission.
                        </p>
                    </div>
                </div>
                <section className="skills">
                    <h3>Skills used</h3>
                    <section className="row g10">
                        <Skill name="Videography"/>
                        <Skill name="Photography"/>
                        <Skill name="Event Coordinating"/>
                        <Skill name="Graphic Design"/>
                        <Skill name="Social Media"/>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Avionics;