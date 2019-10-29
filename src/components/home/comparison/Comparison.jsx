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

        //COMPARISON FEATURE TIME BASED
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/languages')
        .then(result => {
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
            const languagesUsaPercentage = languagesUsa.map(language => {
                if(language.trend === 0){
                    language.trend = 0.01;
                }
                return{id_language:language.id_language, name:language.name, description: language.description, trend:parseFloat((language.trend*100).toFixed(2))}
            })
            dispatch({type: "SET_ALL_LANGUAGES_USA", payload:languagesUsaPercentage})

            //CANADA DATA
            const languagesCanada = result.data[1].data;
            const languagesCanadaPercentage = languagesCanada.map(language => {
                if(language.trend === 0){
                    language.trend = 0.01;
                }
                return{id_language:language.id_language, name:language.name, description: language.description, trend:parseFloat((language.trend*100).toFixed(2))}
            })
            dispatch({type: "SET_ALL_LANGUAGES_CANADA", payload:languagesCanadaPercentage})




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


        //GET ALL LANGUAGES TIME SPAN
        Axios.get('https://t-ask-api.herokuapp.com/api/comparison/languages/timespans')
        .then(result => {
            dispatch({type: "SET_ALL_LANGUAGES_TIME_SPAN", payload:result.data})
        })


        
       ////////////////////JOBS API

       //COMPARISON FEATURE TIME BASED

    //    Axios.get('https://t-ask-api.herokuapp.com/api/comparison/jobs/jobcategories')
    //    .then(result => {
    //        const jobsArray = result.data.map(jobs => {
    //            return {languageName:jobs.name, languageId: jobs.id, isSelect: false, total: jobs.totalJobs}
    //        })
    //        dispatch({type:})
    //    })

       Axios.get('https://t-ask-api.herokuapp.com/api/comparison/jobs/locations')
       .then(result => {
           //COMPARISON FEATURE LOCATION BASED
           //USA DATA
           const jobsUsa = result.data[0].data;
           dispatch({type: "SET_ALL_JOBS_USA", payload: jobsUsa})

            //CANADA DATA
            const jobsCanada = result.data[1].data;
            dispatch({type: "SET_ALL_JOBS_CANADA", payload: jobsCanada})
       })

       //GET ALL JOBS TIME SPAN
       Axios.get('https://t-ask-api.herokuapp.com/api/comparison/jobs/languages')
       .then(result => {
           dispatch({type: "SET_ALL_JOBS_TIME_SPAN", payload: result.data})
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