import '../projects.css';
import splashImage from "../../media/avionics/avionics.png"

function Avionics() {
    return (
        <section>
            <section className="splashImage">
                <img src={splashImage} className="backgroundImage"/>
                <div className="overlay"></div>
                <section className="contentContainer">
                    <h2>AVIONICS</h2>
                    <h4>Technical Project</h4>
                </section>
            </section>
            <section className="contentContainer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum
            </section>
        </section>
    )
}

export default Avionics;