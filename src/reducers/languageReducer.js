const initState = {
    selectedLanguages:[]
}

const languageReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_SELECTED_LANGUAGES":
            return {
                ...state,
                selectedLanguages: action.payload
            }
       
        default:
            return state
    }
}

export default languageReducer;