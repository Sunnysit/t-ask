import Axios from 'axios';
import {useDispatch} from 'react-redux';

export class TaskAxios {

    constructor() {
        this.dispatch = useDispatch();
    }

    // Comparison feature - dropdown menu data

    comparisonLangsMenu(){
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/languages')
            .then(result => {
                const languagesArray = result
                    .data
                    .map(language => {
                        return {languageName: language.name, languageId: language.id_language, isSelect: false, total: language.total}
                    })
                this.dispatch({type: "SET_ALL_LANGUAGES", payload: languagesArray})

                const topLanguages = [];
                for (let i = 0; i < 3; i++) {
                    languagesArray[i].isSelect = true;
                    topLanguages.push(languagesArray[i]);
                }
                this.dispatch({type: 'SET_DEFAULT_LANGUAGES', payload: topLanguages});

            })
    }


    // Comparison and trending feature - languages data based on location

    comparisonLangLocation(){
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/languages/trends')
            .then(result => {


                // Comparison feature
                // USA data
                const languagesUsa = result.data[0].data;
                const languagesUsaPercentage = languagesUsa.map(language => {
                    if (language.trend === 0) {
                        language.trend = 0.01;
                    }
                    return {
                        id_language: language.id_language,
                        name: language.name,
                        description: language.description,
                        trend: parseFloat((language.trend * 100).toFixed(2))
                    }
                })
                this.dispatch({type: "SET_ALL_LANGUAGES_USA", payload: languagesUsaPercentage})

                // Canada data
                const languagesCanada = result.data[1].data;
                const languagesCanadaPercentage = languagesCanada.map(language => {
                    if (language.trend === 0) {
                        language.trend = 0.01;
                    }
                    return {
                        id_language: language.id_language,
                        name: language.name,
                        description: language.description,
                        trend: parseFloat((language.trend * 100).toFixed(2))
                    }
                })
                this.dispatch({type: "SET_ALL_LANGUAGES_CANADA", payload: languagesCanadaPercentage})


                // Trending feature
                //USA data
                const languagesTrendingUsa = languagesUsa.map((language, index) => {
                    return {
                        languageName: language.name,
                        languageId: language.id_language,
                        isSelect: false,
                        languageRank: index + 1,
                        languageDescription: language.description,
                        logoUrl: language.logoUrl
                    }
                })
                this.dispatch({type: "SET_TRENDING_LANGUAGES_DATA_USA", payload: languagesTrendingUsa})

                const firstLanguage = languagesTrendingUsa[0];
                firstLanguage.isSelect = true;
                this.dispatch({type: "SELECT_TRENDING_LANGUAGE", payload: firstLanguage});

                // Canada data
                const languagesTrendingCanada = languagesCanada.map((language, index) => {
                    return {
                        languageName: language.name,
                        languageId: language.id_language,
                        languageRank: index + 1,
                        languageDescription: language.description,
                        logoUrl: language.logoUrl
                    }
                })
                this.dispatch({type: "SET_TRENDING_LANGUAGES_DATA_CANADA", payload: languagesTrendingCanada})

            })
            .catch(error =>
                console.log(error)
            )
    }


    // Comparison feature - language data based on time

    comparisonLangTime() {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/languages/timespans')
            .then(result => {
                this.dispatch({type: "SET_ALL_LANGUAGES_TIME_SPAN", payload: result.data})
            })
    }


    // Comparison feature - job data based on time

    comparisonJobTime(){
        Axios
        .get('https://t-ask-api.herokuapp.com/api/v1/jobs/languages')
        .then(result => {
            this.dispatch({type: "SET_ALL_JOBS_TIME_SPAN", payload: result.data})
        })
    }


    // Comparison feature - job data based on location

    comparisonJobLocation() {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/jobs/locations')
            .then(result => {

                // USA data
                const jobsUsa = result.data[0].data;
                const jobsUsaPercentage = jobsUsa.map(job => {
                    if (job.totalJobs === 0) {
                        job.totalJobs = 1;
                    }
                    return {id_language: job.id_language, name: job.name, totalJobs: job.totalJobs}
                })
                this.dispatch({type: "SET_ALL_JOBS_USA", payload: jobsUsaPercentage})

                //Canada data
                const jobsCanada = result.data[1].data;
                const jobsCanadaPercentage = jobsCanada.map(job => {
                    if (job.totalJobs === 0) {
                        job.totalJobs = 1;
                    }
                    return {id_language: job.id_language, name: job.name, totalJobs: job.totalJobs}
                })
                this.dispatch({type: "SET_ALL_JOBS_CANADA", payload: jobsCanadaPercentage})
            })
    }


    // Trending feature - job categories data

    featureJob() {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/jobs/categories')
            .then(result => {

                // USA data
                const usaData = result.data[0].data;
                const jobsTrendingUsa = usaData.map((job, index) => {
                    return {
                        name: job.name,
                        soc: job.soc,
                        jobRank: index + 1,
                        description: job.description,
                        isSelect: false
                    }
                })

                this.dispatch({type: "SET_ALL_JOBS_CATEGORY_USA", payload: jobsTrendingUsa});

                const firstJob = jobsTrendingUsa[0];
                firstJob.isSelect = true;
                this.dispatch({type: "SELECT_TRENDING_JOB", payload: firstJob});


                // Canada data
                const canadaData = result.data[1].data;
                const jobsTrendingCanada = canadaData.map((job, index) => {
                    return {
                        name: job.name,
                        soc: job.soc,
                        jobRank: index + 1,
                        description: job.description,
                    }
                })
                this.dispatch({type: "SET_ALL_JOBS_CATEGORY_CANADA", payload: jobsTrendingCanada})
            })
    }


    // Register form - languages data

    registerLang() {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/v1/languages')
            .then(result => {
                const languagesArray = result
                    .data
                    .map(language => {
                        return {languageName: language.name, languageId: language.id_language, isSelect: false};
                    })
                this.dispatch({type: "SET_ALL_LANGUAGES", payload: languagesArray});
            })
    }

    
}