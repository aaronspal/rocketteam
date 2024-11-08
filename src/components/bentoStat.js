import React from 'react';
import './bentoStat.css';

function BentoStat({ headline, subtext }) {
    return (
        <div className="bentoStat">
            <h2>
                {headline}
            </h2>
            <span>{subtext}</span>
        </div>
    );
}

export default BentoStat;

