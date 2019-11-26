import React from 'react';

const HeroAbout = () => {
    return(
        <div className="hero hero-about">
            <h2 className="page-title">About Us</h2>
            <div className="hero-info">
            <p>We are: TEAM PENGUIN</p> 
            <div className="logo-container">
                <img className="logo-desktop" src="./assets/icons/logo-desktop.png" alt="penguin logo"/>
                <img className="logo-mobile" src="./assets/icons/logo-mobile.png" alt="penguin logo"/>
            </div>
            <div className="hero-description">
                <p>Our Values</p>
                <p>Some info about the team</p>
                <p>Explanation about the project</p>
            </div>
            </div>
            
        </div>
    )
}

export default HeroAbout