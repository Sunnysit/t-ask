const initState = {
    selectedLanguages: []
}

const languageReducer = (state = initState, action) => {
    switch (action.type) {

        case "ADD_SELECTED_LANGUAGES":
            return {
                ...state,
                selectedLanguages: [
                    ...state.selectedLanguages,
                    action.payload
                ]
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