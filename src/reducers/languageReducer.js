const initState = {

    /* List of languages data*/

    /* For comparison feature based on time*/
    languages: [],

    /* For comparison feature based on location- USA*/
    languagesUsa: [],

    /* For comparison feature based on location- CANADA*/
    languagesCanada: [],

    /* For trending feature*/
    languageTrendingDataUsa: [],

    /* For trending feature*/
    languageTrendingDataCanada: [],

    /* Selected language(s) data*/

    /* For comparison feature*/
    selectedLanguages: [],

    /* For trending feature*/
    languageTrending: {},

    graphDisplay: true,

    languageTimeSpan: [],

    top3LangToggle: true,

    dropDown: true,

    isInTop3: true

}

const languageReducer = (state = initState, action) => {
    switch (action.type) {

        case "SET_ALL_LANGUAGES":
            return {
                ...state,
                languages: action.payload
            }

        case "SET_ALL_LANGUAGES_USA":

            return {
                ...state,
                languagesUsa: action.payload
            }

        case "SET_ALL_LANGUAGES_CANADA":

            return {
                ...state,
                languagesCanada: action.payload
            }

        case "SET_GRAPH_TYPE":
            return {
                ...state,
                graphDisplay: !state.graphDisplay
            }

        case "SET_TRENDING_LANGUAGES_DATA_USA":

            return {
                ...state,
                languageTrendingDataUsa: action.payload
            }

        case "SET_TRENDING_LANGUAGES_DATA_CANADA":

            return {
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
            return {
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
                selectedLanguages: action.payload

            }

        case "SELECT_TRENDING_LANGUAGE":
            return {
                ...state,
                languageTrending: action.payload
            }

        case "SET_ALL_LANGUAGES_TIME_SPAN":
            {
                return {
                    ...state,
                    languageTimeSpan: action.payload
                }

            }

        case "SWITCH_TOP3_COUNTRY":
            {   
                return {
                    ...state,
                    top3LangToggle: !state.top3LangToggle
                }
            }

        case "DROPDOWN":
            {
                return {
                    ...state,
                    dropDown: !state.dropDown
                }
            }
        
        case "CLOSE_DROPDOWN":
            {
                return {
                    ...state,
                    dropDown: true
                }
            }

            case "LANGUAGE_IS_NOT_IN_TOP_3" :{
                return {
                    ...state,
                    isInTop3: false
                }
            }
    
            case "LANGUAGE_IS_IN_TOP_3" :{
                return {
                    ...state,
                    isInTop3: true
                }
            }

        default:
            return state
    }
}

export default languageReducer;