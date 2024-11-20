import React, { useState, useEffect } from 'react';
import './overlay.css';
import Button from './button';

const WelcomePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup');

        if (!hasSeenPopup) {
            setIsOpen(true);
            localStorage.setItem('hasSeenWelcomePopup', 'true');
        }
    }, []);

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                {/* Image Section */}
                <div className="popup-image-section">
                    <img
                        src="../media/outreach/IMG_0379.jpg"
                        alt="Welcome"
                        className="popup-image"
                    />
                </div>

                {/* Content Section */}
                <div className="popup-content-section">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="popup-close-button"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    {/* Title */}
                    <h2 className="popup-title">Today is Giving Day!</h2>

                    {/* Content */}
                    <div className="popup-text-content">
                        <p>
                            We're asking for our community to come together to help fund our rocket for this year's
                            competition. If you want to help empower the engineers of tomorrow, consider donating today!
                        </p>
                    </div>

                    {/* Button */}
                    <div className="popup-button-container">
                        <button onClick={() => setIsOpen(false)}>
                            Donate Today!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePopup;