import '../projects.css';
import './leadership.css'
import background from "../../media/bluebackground.png";
import LeadsCard from "../../components/leads";
import React from "react";

import Qingyuan from "../../media/leads/Screenshot 2024-11-18 at 11.35.06 PM.png"
import Heli from "../../media/leads/Screenshot 2024-10-12 at 3.11.00 PM.jpg"
import Aaron from "../../media/leads/ich2.png"
import Khanh from "../../media/leads/IMG_0713.png"
import Amber from "../../media/leads/IMG_8848.jpg"
import Laura from "../../media/leads/IMG_1754.jpg"
import Marcus from "../../media/leads/IMG_5571.jpg"
import Arjun from "../../media/leads/IMG_5724.jpg"
import Teo from "../../media/leads/IMG_2201.JPG"

function Alumni() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Alumni</h2>
                </section>
            </section>
            <div className="contentContainer">
                <div className="leadsContainer">
                    <LeadsCard big={false} name="Marcus Chan" title="Lab Saftey Officer" year="4th"
                               major="Computer Engineering" image={Marcus}/>
                    <LeadsCard big={false} name="Aaron Spalding" title="Business and Finance" year="3rd"
                               major="Art and Design: Games and Playable Media" image={Aaron}/>
                </div>
            </div>
        </section>
    )
}

export default Alumni;