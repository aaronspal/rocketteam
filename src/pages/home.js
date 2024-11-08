import './home.css';
import Button from "../components/button";
import EventTile from "../components/eventtile";
import BentoStat from "../components/bentoStat";
import RocketLaunch from "../media/rocketlaunchfeb.jpg";
import RocketLaunchVideo from "../media/videos/splashvideo.mp4";

function Home() {
    return (
        <section>
            <section className="landing hero">
                <video className="backgroundVideo" autoPlay loop muted playsInline>
                    <source src={RocketLaunchVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="contentContainer">
                    <h1>
                        FROM SEA TO SPACE,<br></br>
                        YOU'LL FIND SLUGS<br></br>
                        EVERYWHERE
                    </h1>
                </div>
            </section>
            <section className="weare">
                <div className="contentContainer">
                    <div className="weareFlex">
                        <div className="textContainer">
                            <h3>WE ARE UCSC'S PREMIER AEROSPACE ORGANIZATION</h3>
                            <p>
                            As a team, our mission is to design and build high-powered rockets that
                                model current challenges in space exploration and Aerospace Engineering.
                                The UC Santa Cruz Rocketry Team was founded in 2017 by a group of
                                engineering students motivated to pursue hands-on opportunities
                                in Aerospace Engineering.
                            </p>
                            <p>
                                As the first rocketry club at UCSC, the team was inspired to
                                provide its members a unique hands-on engineering experience,
                                spanning across Computer Science, Robotics Engineering, Physics,
                                Electrical Engineering, Business, and numerous other fields.
                                The team also actively participates in STEM outreach throughout
                                the local community. As a team, our mission is to design
                                and build high-powered rockets that model current challenges in space
                                exploration and Aerospace Engineering.
                            </p>
                        </div>
                        <div className="bentoContainer">
                            <img className="RocketIMG" src={RocketLaunch}/>
                            <div className="bentoStatContainer">
                                <BentoStat headline="60+" subtext="Members"/>
                                <BentoStat headline="10" subtext="Subteams"/>
                                <BentoStat headline="12+" subtext="Industry partners"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects hero">
                <div className="heroOverlay">
                    <div className="contentContainer">
                        <div className="heroTextContainer">
                            <h2>PUSHING LIMITS</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam.
                            </p>
                                <Button label="Explore Projects" link="https://example.com/donate"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="upcomingEvents">
                <div className="contentContainer">
                    <h3>Upcoming Events</h3>
                    <div className="eventsContainer">
                    <EventTile day="20" month="November" eventName="Giving Day"
                                   eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="29" month="September" eventName="Cad Workshop - Learn How to CAD using Onshape" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="29" month="September" eventName="Cad Workshop - Learn How to CAD using Onshape" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="29" month="September" eventName="Cad Workshop - Learn How to CAD using Onshape" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                    </div>
                </div>

            </section>
            <section className="outreach hero">
                <div className="heroOverlay">
                    <div className="contentContainer">
                        <div className="heroTextContainer">
                            <h2>EMPOWERING OUR LOCAL COMMUNITY</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam.
                            </p>
                            <Button label="Explore Outreach" link="https://example.com/donate"/>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
