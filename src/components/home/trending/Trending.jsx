import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Axios from 'axios';

import Top3Languages from './Top3Languages';
import UserPickLanguage from './UserPickLanguage';
import Top3Jobs from './Top3Jobs';
import Top10Jobs from './Top10Jobs';

const Trending = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/trends')
        .then(result => {
            const languagesLocationUsa =result.data[0].data;
            const languagesTrendingUsa = languagesLocationUsa.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload:languagesTrendingUsa})


            const languagesLocationCanada =result.data[1].data;
            const languagesTrendingCanada = languagesLocationCanada.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload:languagesTrendingCanada})

            // const languagesLocationCanada = result.data[1].data;
            // dispatch({type: "SET_ALL_LANGUAGES_CANADA", payload:languagesLocationCanada})
        })
        
    },[])

    return(
        <div className="">
            <div className="trending-languages">
                <h2>Trending Languages</h2>
                <Top3Languages/>
                <UserPickLanguage/>
            </div>

            <div className="trending-jobs">
                <h2>Trending Jobs</h2>
                <Top3Jobs/>
                <Top10Jobs/>
            </div>
        </div>
    )
}

export default Trending