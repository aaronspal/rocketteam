import React from 'react';
import './leads.css';

function LeadsCard({big, image, name, title, year, major, about }) {
    return (
        <div className={`leadTile g20 flexContainer ${big ? 'bigTrue' : 'bigFalse'}`}>
            <div className={`${big ? 'bigPhotoTrue' : 'bigPhotoFalse'}`}>
                <img className="leadIMG" src={image} alt={`${name}'s Profile`}/>
            </div>
            <div className="textContainer">
                <h4>{name}</h4>
                <h5>{title}</h5>
                <span>{year} year {major} major</span>
                {/*<h6>{major}</h6>*/}
                {big && <p>{about}</p>}
            </div>
        </div>
    );
}

export default LeadsCard;

