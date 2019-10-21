import React from 'react'
import {useSelector} from 'react-redux'
//import Axios from 'axios'

const UserPickLanguage = () => {

    const trendingLanguages = useSelector(state => state.languages.languageTrendingData.usa);

    //const dispatch = useDispatch();

    // useEffect(() => {
    //     Axios.get('https://t-ask-api.herokuapp.com/api/comparison/trends')
    //     .then(result => {
    //         dispatch({type: "SET_TRENDING_LANGUAGES_DATA", payload:result.data})
    //     })
        
    // }, [])

    return ( 
        <div className="">
            <p>Top10Languages Component</p>
            {/* {trendingLanguages.map(item=>{
                return <p key={item.id_language}>{item.name}</p>
            })} */}
        </div>
     );
}
 
export default UserPickLanguage;