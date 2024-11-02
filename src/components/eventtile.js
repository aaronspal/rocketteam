import React from 'react';
import './eventtile.css';

function EventTile({ day, month, eventName, eventLocation, eventTime }) {
    return (
        <div className="eventsTile">
            <h4>{month}</h4>
            <h1>{day}</h1>
            <div className="eventTitle">
                <h4>{eventName}</h4>
            </div>
            <div className="eventInfo">
                <p>{eventLocation}</p>
                <p>{eventTime}</p>
            </div>
        </div>
    );
}

export default EventTile;