const initState = {
    
    /* List of languages data*/

    /* For trending feature based on tine*/
    languages:[],

    /* For trending feature based on location- USA*/
    languagesUsa:[],

    /* For trending feature based on location- CANADA*/
    languagesCanada:[],

    /* For comparison feature*/
    languageTrendingDataUsa: [],

    /* For comparison feature*/
    languageTrendingDataCanada: [],
    

    /* Selected language(s) data*/

    /* For comparison feature*/
    selectedLanguages: [],
    /* For trending feature*/
    languageTrending: {},

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
            return {
                ...state,
                languages: action.payload
            }

        case "SET_ALL_LANGUAGES_USA":
        
                return{
                    ...state,
                    languagesUsa: action.payload
                }

        case "SET_ALL_LANGUAGES_CANADA":

                return{
                    ...state,
                    languagesCanada: action.payload
                }

        case "SET_TRENDING_LANGUAGES_DATA_USA":
            
            return{
                ...state,
                languageTrendingDataUsa: action.payload
            }

        case "SET_TRENDING_LANGUAGES_DATA_CANADA":
        
                return{
                    ...state,
                    languageTrendingDataCanada: action.payload
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
        case "SELECT_TRENDING_LANGUAGE":
            return {
                ...state,
                languageTrending: action.payload
            }
        default:
            return state
    }
}

export default languageReducer;