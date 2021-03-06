import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ToggleSwitch = () => {
    
    const dispatch = useDispatch();

    const graphToggle = useSelector(state => state.languages.graphDisplay);

    const handleSwitch = () => {
        dispatch({type: "SET_GRAPH_TYPE"});
        
    }

    return(
        <div className="toggle-switch-container">
            <p className="comparison-text">Compare by: </p>
        <div className="toggle-switch">
            <p>Time</p>
            <div className="toggle-container"  onClick={handleSwitch}>
            <div className={!graphToggle ? 'location toggle-ball' : 'time toggle-ball'}>
            </div>
            </div>
            <p>&nbsp;Location</p>

        </div>
        </div>
        
    )

}

export default ToggleSwitch
