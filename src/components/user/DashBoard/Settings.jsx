import React from 'react';

const Settings = () => {
    return(
        <div className="user-settings">
            <div className="user-profile">
                <img src="./assets/signup/default-profile-picture.png" alt=""/>
                <p>Edit Profile</p>
            </div>
            <div className="user-menu">
                <div className="favorites">
                <p>Favorite Articles</p>
                <p>Favorite Events</p>
                </div>
                <p>Logout</p>
                
            </div>
        </div>
    )
}

export default Settings;