import React from 'react';

const HeroAbout = () => {
    const styleTask = {
        fontStyle: "italic",
        color: "#272664",
        fontWeight: 700
    }

    return (
        <div className="hero hero-about">
            <h2 className="page-title">About Us</h2>
            <div className="hero-info card">
                <p className="hero-text">This web app is brought to you by: Team Penguin </p>
                <div className="logo-container">
                    <img
                        className="logo-desktop"
                        src="./assets/icons/logo-desktop.png"
                        alt="penguin logo"/>
                    <img
                        className="logo-mobile"
                        src="./assets/icons/logo-mobile.png"
                        alt="penguin logo"/>
                </div>
                <div className="hero-description">
                    <p>
                        <span className="blue-text" style={styleTask}>Task</span> is brought to you by the Team Penguins. We are a group of passionate designers
                        and developers with varied backgrounds, who thrive on solving distinct problems
                        from a different perspective.</p>
                </div>
            </div>

        </div>
    )
}

export default HeroAbout