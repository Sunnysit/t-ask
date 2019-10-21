import React from 'react'
import {useSelector} from 'react-redux'
//import Axios from 'axios'

const UserPickLanguage = () => {

    const trendingLanguages = useSelector(state => state.languages.languageTrendingData);
    console.log('trending languages from reducer');
    console.log(trendingLanguages);


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