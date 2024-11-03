import './home.css';
import Button from "../components/button";
import EventTile from "../components/eventtile";

function Home() {
    return (
        <section>
            <section className="landing hero">
                <div className="contentContainer">
                    <h1>FROM SEA TO SPACE,<br></br>
                        YOU'LL FIND SLUGS<br></br>
                        EVERYWHERE</h1>
                </div>
            </section>
            <section className="weare">
                <div className="contentContainer">
                    <h3>WE ARE UCSC'S PREMIER ROCKETRY ORGANIZATION</h3>
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
                        <EventTile day="20" month="November" eventName="Giving Day" eventLocation="Baskin Engineering E2 180" eventTime="5PM - 6PM"/>
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
