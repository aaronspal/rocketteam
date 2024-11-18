import React, {useEffect, useRef} from 'react';
import './projectfeature.css';
import Button from "./button";

function ProjectFeature({ team, type, info, photo}) {
    const containerRef = useRef([]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        containerRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            containerRef.current.forEach(element => {
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <section className="splashImage projectFeature">
            <img src={photo} className="backgroundImage"/>
            <div className="overlay"></div>
            <section ref={el => containerRef.current[0] = el} className="contentContainer">
                <h2>{team}</h2>
                <h4>{type}</h4>
                <p>{info}</p>
                {/*<Button label="Explore Vehicle" link="https://example.com/donate"/>*/}
            </section>
        </section>
    );
}

export default ProjectFeature;

