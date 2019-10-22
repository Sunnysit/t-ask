import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import SelectLanguage from './SelectLanguages';
import LanguagesLegend from './LanguagesLegend';
import ToggleSwitch from './ToggleSwitch';

import Axios from 'axios';


const Comparison = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/languages')
        .then(result => {
            //console.log(result.data);
            const languagesArray = result.data.map((language, index) => {
                return {languageName:language.name, languageId:index, isSelect: false, total: language.total}
            })
            dispatch({type: "SET_ALL_LANGUAGES", payload:languagesArray})

            const topLanguages = [];
            for(let i = 0; i <3; i++){
                languagesArray[i].isSelect = true;
                topLanguages.push(languagesArray[i]);
            }
            dispatch({type: 'SET_DEFAULT_LANGUAGES', payload:topLanguages});

            //console.log(selectLanguages);
            //setLanguages(languagesArray);
        })
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/trends')
        .then(result => {
            const languagesLocationUsa =result.data[0].data;
            dispatch({type: "SET_ALL_LANGUAGES_USA", payload:languagesLocationUsa})

            const languagesLocationCanada = result.data[1].data;
            dispatch({type: "SET_ALL_LANGUAGES_CANADA", payload:languagesLocationCanada})



            /* Trending feature data*/
            const languagesUsa =result.data[0].data;
            const languagesTrendingUsa = languagesUsa.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload:languagesTrendingUsa})


            const languagesCanada =result.data[1].data;
            const languagesTrendingCanada = languagesCanada.map((language, index) => {
                return {languageName: language.name, languageId: language.id_language, languageRank: index+1, languageDescription: language.description}
            })
            dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload:languagesTrendingCanada})

        })
        
    },[])
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