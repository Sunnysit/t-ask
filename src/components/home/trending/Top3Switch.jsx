import React ,{ useState ,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Top3Switch = (props) => {

    const dispatch = useDispatch();

    const switchType = props.type;

    const countryToggleJob = useSelector(state => state.jobs.top3JobToggle);
    const countryToggleLanguage = useSelector(state => state.languages.top3LangToggle);


    const [toggle,setToggle] = useState(true);
   
 

    useEffect(()=>{

        switch(switchType)
        {   
            default:
            case "language": setToggle(countryToggleLanguage);  break;
            case "job":  setToggle(countryToggleJob); break;
        }


    },[countryToggleLanguage,countryToggleJob,switchType])
    

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