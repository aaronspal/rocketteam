import './home.css';
import Button from "../components/button";
import EventTile from "../components/eventtile";
import BentoStat from "../components/bentoStat";
import SplashVideo from "../media/videos/splashvideo.mp4";
import RocketLaunchVideoFAR from "../media/videos/FARLaunch2.mp4"
import ESRALogo from "../media/home/ESRALogo.png"

import React, { useEffect, useRef } from 'react';
import UCSCLogo from "../media/UC_Santa_Cruz_logo.svg";
import BaskinLogo from "../media/UCSC_BaskinEng_Logo_Color_RGB.svg";


function Home() {
    const containerRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null, // Observe within the viewport
            rootMargin: '0px',
            threshold: 0.1, // Trigger when 10% of the element is in view
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'visible' class when the element is in the viewport
                    entry.target.classList.add('visible');
                    // Optionally, unobserve once the element is visible
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe each heroTextContainer
        containerRef.current.forEach(element => {
            if (element) { // Make sure the element is not null or undefined
                observer.observe(element);
            }
        });

        // Cleanup observer on unmount or when references are invalid
        return () => {
            containerRef.current.forEach(element => {
                if (element) { // Check if element is valid
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <section>
            <section className="landing hero">
                <video className="backgroundVideo" autoPlay loop muted playsInline>
                    <source src={SplashVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="headlineContainer">
                    <h1>
                        FROM SEA TO SPACE,<br></br>
                        YOU'LL FIND SLUGS<br></br>
                        EVERYWHERE
                    </h1>
                </div>
            </section>
            <section className="weare">
                <div className="headlineContainer">
                    <div className="bentoStatContainer">
                        <BentoStat targetNumber="70" subtext="Members" suffix="+"/>
                        <BentoStat targetNumber="10" subtext="Teams"/>
                        <BentoStat targetNumber="20" subtext="Industry Partners" suffix="+"/>
                    </div>
                    <hr/>
                    <div className="flexContainer g30">
                        <div className="textContainer">
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
                                be constructing a rocket that goes <span className='highlight'> ten thousand feet into the air at speeds exceeding
                                Mach 1.</span>
                            </p>
                            <div className="row">
                                <img src={ESRALogo} className="ESRALogo"/>
                                <div className="UCSCLogos">
                                    <img src={UCSCLogo} className="UCSCLogo"/>
                                    <img src={BaskinLogo} className="BaskinLogo"/>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <video className="RocketVideo" autoPlay loop muted playsInline>
                                <source src={RocketLaunchVideoFAR} type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <figcaption>Fullscale Test Launch, February 2024</figcaption>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects hero">
                <div className="heroOverlay">
                    <div className="headlineContainer">
                        <div ref={el => containerRef.current[0] = el} className="heroTextContainer">
                            <h2>PUSHING LIMITS</h2>
                            <p>
                                Even without an aerospace department, the UCSC Rocket Team pushes on. From competing in the most prestigious rocketry competitions
                                to researching groundbreaking thrust-vectoring designs, our team is the embodiment of success in the midst of challenges.
                            </p>
                            <Button label="Explore Projects" link="https://example.com/donate"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="upcomingEvents">
                <div className="headlineContainer">
                    <h3>Upcoming Events</h3>
                    <div className="eventsContainer g10">
                        <EventTile day="19" month="November" eventName="General Meeting" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="20" month="November" eventName="Giving Day" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="3" month="December" eventName="General Meeting" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                        <EventTile day="14" month="December" eventName="L1 Launch" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
                    </div>
                    <span className="infoNote">For individual subteam meetings, please refer to the events calendar!</span>
                </div>
            </section>
            <section className="outreach hero">
                <div className="heroOverlay">
                    <div className="headlineContainer">
                        <div ref={el => containerRef.current[1] = el} className="heroTextContainer">
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
