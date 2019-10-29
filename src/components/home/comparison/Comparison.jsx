import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import SelectLanguage from './SelectLanguages';
import LanguagesLegend from './LanguagesLegend';
import ToggleSwitch from './ToggleSwitch';

import Axios from 'axios';


const Comparison = () => {

    const dispatch = useDispatch()

    useEffect(() => {


        ////////////////////LANGUAGES API
        
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/languages')
        .then(result => {
            //COMPARISON FEATURE TIME BASED
            const languagesArray = result.data.map(language => {
                return {languageName:language.name, languageId:language.id_language, isSelect: false, total: language.total}
            })
            dispatch({type: "SET_ALL_LANGUAGES", payload:languagesArray})

            const topLanguages = [];
            for(let i = 0; i <3; i++){
                languagesArray[i].isSelect = true;
                topLanguages.push(languagesArray[i]);
            }
            dispatch({type: 'SET_DEFAULT_LANGUAGES', payload:topLanguages});
            
        })
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/trends/')
        .then(result => {
            //COMPARISON FEATURE LOCATION BASED
            //USA DATA
            const languagesUsa =result.data[0].data;
            dispatch({type: "SET_ALL_LANGUAGES_USA", payload:languagesUsa})

            //CANADA DATA
            const languagesCanada = result.data[1].data;
            dispatch({type: "SET_ALL_LANGUAGES_CANADA", payload:languagesCanada})



            // TRENDING FEATURE
            //USA DATA
            const languagesTrendingUsa = languagesUsa.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload:languagesTrendingUsa})

            //CANADA DATA
            const languagesTrendingCanada = languagesCanada.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_CANADA", payload:languagesTrendingCanada})

        })


        //Get all languages time span
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/languages/timespans')
        .then(result => {
            dispatch({type: "SET_ALL_LANGUAGES_TIME_SPAN", payload:result.data})
        })

        
    },[dispatch])
    return(
        <div className="">
            <p>Comparison feature. Select languages to see how they behave in different aspects.</p>
            <SelectLanguage/>
            <LanguagesLegend/>
            <ToggleSwitch/>
        </div>
    )
}

export default Comparison;