import '../App.css';
import './footer.css';
import RTLogo from '../images/RocketTeamLogoWhite.png'

function Footer() {
    return (
        <footer>
            <section className="footerContainer">
                <img src={RTLogo} className="RocketTeamLogoWhite"/>
                <div className="footerLinks">
                    <div>
                        <h5>Spaceport America</h5>
                        <a>Vehicle Systems</a>
                        <a>Recovery</a>
                        <a>Payload</a>
                    </div>
                    <div>
                        <h5>TECHNICAL PROJECTS</h5>
                        <a>Ground Control Systems</a>
                        <a>Avionics</a>
                        <a>Thrust Vector Control</a>
                        <a>Simulations</a>
                    </div>
                    <div>
                        <h5>LEADERSHIP</h5>
                        <a>Current Leads</a>
                        <a>Alumni</a>
                    </div>
                    <div>
                        <h5>SPONSORS</h5>
                        <a>Our Sponsors</a>
                        <a>Become a Sponsor</a>
                    </div>
                    <div>
                        <h5>NEW MEMBERS</h5>
                        <a>How to Join</a>
                        <a>Events Calendar</a>
                        <a>Slack Link</a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
