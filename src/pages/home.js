import './home.css';
import Button from "../components/button";
import EventTile from "../components/eventtile";
import BentoStat from "../components/bentoStat";
import RocketLaunch from "../media/home/rocketlaunchfeb.jpg";
import RocketLaunchVideo from "../media/videos/splashvideo.mp4";

import React, { useEffect, useRef, useState } from 'react';


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
                    {/*<div className="flexContainer">*/}
                    {/*    <div className="textContainer">*/}
                    {/*        <h3>WE ARE UCSC'S PREMIER AEROSPACE ORGANIZATION</h3>*/}
                    {/*        <p>*/}
                    {/*            Nested within the forests of Santa Cruz, California, the UCSC Rocket Team is*/}
                    {/*            the leading aerospace organization for the University of California,*/}
                    {/*            Santa Cruz. We design and build high-powered rockets that model current*/}
                    {/*            challenges in space exploration and aerospace engineering.*/}
                    {/*        </p>*/}
                    {/*        <p>*/}
                    {/*            We are dedicated to providing our students with a unique hands-on*/}
                    {/*            experience that spans a variety of disciplines such as Computer Science,*/}
                    {/*            Robotics Engineering, Electrical Engineering, Astrophysics, as well as*/}
                    {/*            Business Administration and the Arts.*/}

                    {/*            We also*/}
                    {/*        </p>*/}
                    {/*        <p>*/}
                    {/*            This year, the UCSC Rocket team will be competing in the International Rocketry*/}
                    {/*            Engineering Competition (IREC), formerly known as Spaceport America. Students will*/}
                    {/*            be constructing a rocket that goes ten thousand feet into the air at speeds exceeding*/}
                    {/*            Mach 1.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <div className="bentoContainer">*/}
                    {/*        <div className="bentoStatContainer">*/}
                    {/*            <BentoStat headline="60+" subtext="Members"/>*/}
                    {/*            <BentoStat headline="10" subtext="Subteams"/>*/}
                    {/*            <BentoStat headline="20+" subtext="Partners"/>*/}
                    {/*        </div>*/}
                    {/*        <img className="RocketIMG" src={RocketLaunch}/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="bentoStatContainer">
                        <BentoStat headline="60+" subtext="Members"/>
                        <BentoStat headline="10" subtext="Subteams"/>
                        <BentoStat headline="20+" subtext="Partners"/>
                    </div>
                    <h3>WE ARE UCSC'S PREMIER AEROSPACE ORGANIZATION</h3>
                        <p>
                            Nested within the forests of Santa Cruz, California, the UCSC Rocket Team is
                            the leading aerospace organization for the University of California,
                            Santa Cruz. We design and build high-powered rockets that model current
                            challenges in space exploration and aerospace engineering.
                        </p>
                        <p>
                            We are dedicated to providing our students with a unique hands-on
                            experience that spans a variety of disciplines such as Computer Science,
                            Robotics Engineering, Electrical Engineering, Astrophysics, as well as
                            Business Administration and the Arts.

                            We also
                        </p>
                        <p>
                            This year, the UCSC Rocket team will be competing in the International Rocketry
                            Engineering Competition (IREC), formerly known as Spaceport America. Students will
                            be constructing a rocket that goes ten thousand feet into the air at speeds exceeding
                            Mach 1.
                        </p>
                </div>
            </section>
            <section className="projects hero">
            <div className="heroOverlay">
                    <div className="contentContainer">
                        <div className={"heroTextContainer"}>
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
                        <div className={"heroTextContainer"}>
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
