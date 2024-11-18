import React from 'react';
import './leads.css';

function LeadsCard({big, image, name, title, year, major, about }) {
    return (
        <div className={`leadTile flexContainer ${big ? 'bigTrue' : 'bigFalse'}`}>
            <div className={`${big ? 'bigPhotoTrue' : 'bigPhotoFalse'}`}>
                <img className="leadIMG" src={image} alt={`${name}'s Profile`}/>
            </div>
            <div className="textContainer">
                <h3>{name}</h3>
                <h4>{title}</h4>
                <h6>{year} year {major} major</h6>
                {/*<h6>{major}</h6>*/}
                {big && <p>{about}</p>}
            </div>
        </div>
    );
}

export default LeadsCard;

