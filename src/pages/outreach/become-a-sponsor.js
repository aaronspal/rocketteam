import '../projects.css';
import background from "../../media/bluebackground.png";
import React from "react";


function Sponsors() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Become a Sponsor</h2>
                </section>
            </section>
            <div className="contentContainer">
                <h1>Coming Soon!</h1>
            </div>
        </section>
    )
}

export default Sponsors;