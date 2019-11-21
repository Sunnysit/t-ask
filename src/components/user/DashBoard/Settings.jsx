import React from 'react';
import ClickOutsideArticles from './ClickOutsideArticles';
import ClickOutsideEvents from './ClickOutsideEvents';
import ArticlesPopup from './ArticlesPopup'
import EventsPopup from './EventsPopup';
import LogOut from './LogOut';

const Settings = () => {

    return (
        <div className="user-settings">
            <div className="mobile">
                <div className="user-menu mobile-coming-soon">
                    <ClickOutsideArticles/>
                    <ClickOutsideEvents/>
                </div>

                <div className="user-menu desktop-coming-soon">
                    <ArticlesPopup/>
                    <EventsPopup/>
                </div>
            </div>
            <div className="desktop">
                <div className="user-profile">
                    <img src="./assets/signup/default-profile-picture.png" alt=""/>
                    <p>Edit Profile</p>
                </div>
                <div className="user-menu">
                    <div className="favorites">
                        <ArticlesPopup/>
                        <EventsPopup/>
                    </div>
                    <LogOut/>

                </div>
            </div>
        </div>
    )
}

export default Settings;