import React from 'react';
import Popup from 'reactjs-popup';

const ComingSoonLikePopup = () => {
    return (
        <Popup
            trigger={<div className="action-btn favorite-btn">
        <img
            className="action-icon normal"
            src="./assets/icons/favorite-normal-icon.svg"
            alt="favorite button"/>
        <img
            className="action-icon hover"
            src="./assets/icons/favorite-hover-icon.svg"
            alt="favorite button"/>
        <img
            className="action-icon selected"
            src="./assets/icons/favorite-selected-icon.svg"
            alt="favorite button"/>
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

export default ComingSoonLikePopup