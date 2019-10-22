const initState = {
    selectedLanguages: [],
    languageTrendingData: [],
    languages:[],
    graphDisplay: true
}

const languageReducer = (state = initState, action) => {
    switch (action.type) {

        case "SET_GRAPH_TYPE":
            return {
                ...state,
                graphDisplay: !state.graphDisplay
            }

        case "SET_ALL_LANGUAGES":
            console.log(`languages in reducer ${state.languages}`)
            return {
                ...state,
                languages: action.payload
            }

        case "SET_TRENDING_LANGUAGES_DATA":
            
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
        default:
            return state
    }
}

export default languageReducer;