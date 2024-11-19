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

function CurrentLeadership() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Leadership</h2>
                </section>
            </section>
            <div className="contentContainer">
                <h5 className="H5Gray">Administration Team</h5>
                <LeadsCard big={true} name="Qingyuan Cao" title="President" year="4th" major="Computer Engineering"
                           image={Qingyuan}
                           about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                 mollit anim id est laborum."
                />
                <LeadsCard big={true} name="Khan Tran" title="Vice President" year="4th" major="Robotics" image={Khanh}
                           about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                 mollit anim id est laborum."
                />
                <hr/>
                <div className="leadsContainer">
                    <LeadsCard big={false} name="Marcus Chan" title="Lab Saftey Officer" year="4th"
                               major="Computer Engineering" image={Marcus}/>
                    <LeadsCard big={false} name="Aaron Spalding" title="Business and Finance" year="3rd"
                               major="Art and Design: Games and Playable Media" image={Aaron}/>
                    <LeadsCard big={false} name="Alexander Dalchev" title="Launch Operations" year="2nd"
                               major="Business" image={Aaron}/>
                    <LeadsCard big={false} name="Heli Kadakia" title="Outreach" year="2nd"
                               major="Computer Science and Computer Engineering" image={Heli}/>
                </div>
                <hr/>
                <h5 className="H5Gray">Competition Leads</h5>
                <div className="leadsContainer">
                <LeadsCard big={false} name="Teodor Langan" title="Vehicle Systems" year="4th"
                               major="Computer Engineering" image={Teo}/>
                    <LeadsCard big={false} name="Amber Borjigin" title="Recovery" year="4th"
                               major="Computer Engineering" image={Amber}/>
                    <LeadsCard big={false} name="Laura Ortiz" title="Payload" year="4th"
                               major="Robotics" image={Laura}/>
                </div>
                <hr/>
                <h5 className="H5Gray">Project Leads</h5>
                <div className="leadsContainer">
                <LeadsCard big={false} name="Julian Barberra" title="Avionics Electrical" year="4th"
                               major="Computer Engineering" image={Aaron}/>
                    <LeadsCard big={false} name="Merrick Fort" title="Avionics Software" year="4th"
                               major="Art and Design: Games and Playable Media" image={Aaron}/>
                    <LeadsCard big={false} name="Sage Silberman" title="Ground Control Systems" year="4th"
                               major="Art and Design: Games and Playable Media" image={Aaron}/>
                    <LeadsCard big={false} name="Amber Borjigin" title="Thrust Vector Control" year="4th"
                               major="Art and Design: Games and Playable Media" image={Amber}/>
                    <LeadsCard big={false} name="Arjun Padiyar" title="Simulations" year="4th"
                               major="Art and Design: Games and Playable Media" image={Arjun}/>
                </div>
            </div>
        </section>
    )
}

export default CurrentLeadership;