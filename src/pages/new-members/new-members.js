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
                <h1>Somethign</h1>
                <p>At UCSC Rocket Team all majors and students are welcome to join there is no requirement to join the team and its ok if you don’t know anything, and if you do that great! We encourage members of all different backgrounds to join. To get details join our slack (located on our homepage). To checkout the team come to general informational meetings at the begging of every month!</p>
            </div>
        </section>
    )
}

export default NewMembers;