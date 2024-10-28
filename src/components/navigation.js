import '../App.css';
import './navigation.css';
import RTLogo from '../images/RocketTeamLogoWhite.png'

function Navigation() {
    return (
        <nav>
            <div className="links">
                <img src={RTLogo} className="RTLogoNav"/>
                <a>Home</a>
                <a>Projects</a>
                <a>Sponsors</a>
                <a>New Members</a>
            </div>
            <button className="actionButton">Donate</button>

        </nav>
    );
}

export default Navigation;
