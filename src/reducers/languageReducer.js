const initState = {
    selectedLanguages: [],
    languageTrendingData: {
    usa:[{id_language:0}]
    },
    languages:[],
    languageTimeSpan:[]
}

const languageReducer = (state = initState, action) => {
    switch (action.type) {

        case "SET_ALL_LANGUAGES":
            console.log(`languages in reducer${state.languages}`)
            return {
                ...state,
                languages: action.payload
            }

        case "SET_TRENDING_LANGUAGES_DATA":
            console.log(`trending languages in reducer ${state.languageTrendingData}`)
            return{
                ...state,
                languageTrendingData: action.payload
            }

        case "ADD_SELECTED_LANGUAGES":
            return {
                ...state,
                selectedLanguages: [
                    ...state.selectedLanguages,
                    action.payload
                ]
            }
        case "SET_DEFAULT_LANGUAGES":
            return{
                ...state,
                selectedLanguages: action.payload
            }
        case "UPDATE_SELECTED_LANGUAGES":
            return {
                ...state,
                ...state
                    .selectedLanguages
                    .slice(0, 1),
                selectedLanguages: [
                    ...state.selectedLanguages,
                    action.payload
                ]
            }
            case "REMOVE_SELECTED_LANGUAGES":
                    return {
                        ...state,
                        selectedLanguages: 
                            action.payload
                        
                    }

            case "SET_ALL_LANGUAGES_TIME_SPAN":{
                    return {
                        ...state,
                        languageTimeSpan: action.payload
                    }

                    }           
        default:
            return state
    }
}

export default languageReducer;