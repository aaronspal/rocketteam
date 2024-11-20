import '../projects.css';
import background from "../../media/bluebackground.png";
import React from "react";
import YouTubeEmbed from "../../components/youtubeEmbed";


function Media() {
    return (
        <section>
            <section className="topImage">
                <img src={background} className="backgroundImage"/>
                <section className="pageHeadlineContainer">
                    <h2>Media</h2>
                </section>
            </section>
            <div className="contentContainer">
                <div>
                    <YouTubeEmbed videoId="KjC0E-SoNAs"/>
                    <figcaption>UCSC Rocket Team, Giving Day 2024</figcaption>
                </div>
            </div>
        </section>
    )
}

export default Media;