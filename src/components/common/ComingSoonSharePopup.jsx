import React from 'react';
import Popup from 'reactjs-popup';

const ComingSoonSharePopup = () => {
    return (
        <Popup
            trigger={<div className="action-btn share-btn">
        <img
            className="action-icon normal"
            src="./assets/icons/share-normal-icon.svg"
            alt="share button"/>
        <img
            className="action-icon hover"
            src="./assets/icons/share-hover-icon.svg"
            alt="share button"/>
        <img
            className="action-icon selected"
            src="./assets/icons/share-selected-icon.svg"
            alt="share button"/>
    </div>}
            on="hover"
            position="top left"
            className="coming-soon-share"
            closeOnDocumentClick>
            {close => (
                <div onClick={ close }>
                    Coming soon!
                </div>
            )}
                

        </Popup>

    )
}

export default ComingSoonSharePopup