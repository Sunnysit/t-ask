import React from 'react';
import { useDispatch} from 'react-redux';

const Top3Switch = (props) => {

    const dispatch = useDispatch();

    //Get toggle type from parent
    const switchType = props.type;
   
    //Get toggle value from parent
    const toggle = props.toggle;
    

    const handleSwitch = () => {
        switch(switchType)
        {   
            default:
            case "language":   dispatch({type: "SWITCH_TOP3_COUNTRY"}); break;
            case "job":    dispatch({type: "SWITCH_TOP3_COUNTRY_JOB"}); break;
        }
      
        
    }
    
    return (    
    <div className="toggle-switch">
    <p>USA</p>
    <div className="toggle-container"  onClick={handleSwitch}>
    <div className={toggle ? 'usa toggle-ball' : 'canada toggle-ball'}>
    </div>
    </div>
    <p>Canada</p>

    </div> );
}
 
export default Top3Switch;