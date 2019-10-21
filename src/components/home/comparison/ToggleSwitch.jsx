import React, {useState} from 'react';

const ToggleSwitch = () => {
    
    
    const [graphToggle, setGraphToggle] = useState(false);

    const handleSwitch = () => {
        setGraphToggle(!graphToggle);
        console.log(graphToggle);
    }

    return(
        <div id="toggle-switch"  onClick={handleSwitch}>
            <div id="toggle-ball" className={!graphToggle ? 'location' : 'time'}>
            </div>
        </div>
    )

}

export default ToggleSwitch
