import React from 'react';

const ActionBtns = () => {
    return ( <div className="action-container">
    <div className="action-btn share-btn">
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
    </div>
    <div className="action-btn favorite-btn">
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
    </div>
</div> );
}
 
export default ActionBtns;