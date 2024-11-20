import '../projects.css';
import './new-members.css'
import background from "../../media/bluebackground.png";
import infoBoard from "../../media/new-members/RocketTeamInfoBoard.png"
import React from "react";

import Aaron from "../../media/leads/ich2.png"
import Khanh from "../../media/leads/IMG_0713.png"
import Amber from "../../media/leads/IMG_8848.jpg"
import Laura from "../../media/leads/IMG_1754.jpg"
import Marcus from "../../media/leads/IMG_9093.jpg"
// import Qingyuan from "../../media/leads/ich2.png"


function NewMembers() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>New Members</h2>

                </section>
            </section>
            <div className="contentContainer">
                <img src={infoBoard} className="IMG100"/>
                <h6>Who Can Join?</h6>
                <p>
                    Anyone! At UCSC Rocket Team all majors and students are welcome to join there is no requirement to
                    join
                    the team and its ok if you don’t know anything, and if you do that great! We encourage members of
                    all
                    different backgrounds to join.
                </p>
                <h6>What do we do?</h6>
                <p>
                    Anyone! At UCSC Rocket Team all majors and students are welcome to join there is no requirement to
                    join
                    the team and its ok if you don’t know anything, and if you do that great! We encourage members of
                    all
                    different backgrounds to join.
                </p>
                <h6>Why join rocket team?</h6>
                <p>
                    As the first rocketry club at UCSC, the team was inspired to provide its members a unique hands-on
                    engineering experience, spanning across Computer Science, Robotics Engineering, Physics, Electrical
                    Engineering, Business, and numerous other fields. The team also actively participates in STEM
                    outreach throughout the local community. If you wish to request an outreach event or workshop
                    from the team, contact us. As a team, our mission is to design and build high-powered rockets that
                    model current challenges in space exploration and Aerospace Engineering.
                </p>
            </div>
        </section>
    )
}

export default NewMembers;