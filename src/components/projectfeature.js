import React from 'react';
import './projectfeature.css';

function ProjectFeature({ team, type, info, photo}) {
    return (
        <section className="splashImage">
            <img src={photo} className="backgroundImage"/>
            <div className="overlay"></div>
            <section className="contentContainer">
                <h2>{team}</h2>
                <h4>{type}</h4>
                <p>{info}</p>
            </section>
        </section>
    );
}

export default ProjectFeature;

