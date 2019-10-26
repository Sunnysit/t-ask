import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

const ToggleSwitch = () => {
    
    const dispatch = useDispatch();

    const graphToggle = useSelector(state => state.languages.graphDisplay)

    const handleSwitch = () => {
        dispatch({type: "SET_GRAPH_TYPE"});
        
    }

    return(
        <div className="toggle-switch">
            <p>Time</p>
            <div id="toggle-container"  onClick={handleSwitch}>
            <div id="toggle-ball" className={!graphToggle ? 'location' : 'time'}>
            </div>
            </div>
            <p>Location</p>

        </div>
    )

}

export default ToggleSwitch
