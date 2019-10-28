import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Top3Switch = () => {

    const dispatch = useDispatch();

    const countryToggle = useSelector(state => state.languages.top3LangToggle);

    const handleSwitch = () => {
        dispatch({type: "SWITCH_TOP3_COUNTRY"});
        
    }
    
    return (    
    <div className="toggle-switch">
    <p>USA</p>
    <div className="toggle-container"  onClick={handleSwitch}>
    <div className={countryToggle ? 'usa toggle-ball' : 'canada toggle-ball'}>
    </div>
    </div>
    <p>Canada</p>

    </div> );
}
 
export default Top3Switch;