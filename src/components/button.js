import React from 'react';
import './button.css';

function Button({ label, link }) {
    return (
        <button onClick={() => window.location.href = link}>
            {label}
        </button>
    );
}

export default Button;

