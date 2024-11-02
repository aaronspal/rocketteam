import '../App.css';
import RTLogo from '../images/RocketTeamLogoWhite.png'
import UCSCLogo from '../images/UC_Santa_Cruz_logo.svg'
import BaskinLogo from '../images/UCSC_BaskinEng_Logo_Color_RGB.svg'
import './footer.css'

function Footer() {
    return (
        <footer>
            <section className="footerContainer">
                <div className="footerLogos">
                    <div>
                        <img src={RTLogo} className="RocketTeamLogoWhite"/>
                    </div>
                    <div className="UCSCLogos">
                        <img src={UCSCLogo} className="UCSCLogo"/>
                        <img src={BaskinLogo} className="BaskinLogo"/>
                    </div>
                </div>

                <div className="footerLinks">
                    <div>
                        <h5>IREC 2025</h5>
                        <a>Vehicle Systems</a>
                        <a>Recovery</a>
                        <a>Payload</a>
                    </div>
                    <div>
                        <h5>TECHNICAL PROJECTS</h5>
                        <a>Avionics</a>
                        <a>Ground Control Systems</a>
                        <a>Thrust Vector Control</a>
                        <a>Simulations</a>
                    </div>
                    <div>
                    <h5>OUTREACH</h5>
                        <a>IREC Outreach</a>
                        <a>Cinematics</a>
                        <a>Our Sponsors</a>
                        <a>Become a Sponsor</a>
                    </div>
                    <div>
                        <h5>LEADERSHIP</h5>
                        <a>Current Leads</a>
                        <a>Alumni</a>
                    </div>
                    <div>
                        <h5>NEW MEMBERS</h5>
                        <a>How to Join</a>
                        <a>Events Calendar</a>
                        <a>Slack Link</a>
                    </div>
                </div>
                <div className="footerInfo">
                    <div className="copywrite">
                        <h5>COPYWRIGHT UCSC ROCKETRY 2024. ALL RIGHTS RESERVED</h5>
                    </div>
                    <div className="preferences">
                    <h5>PRIVACY POLICY</h5>
                        <h5>COOKIE PREFERENCES</h5>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
