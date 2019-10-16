const initState = {
   articlesResult:[]
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case "UPDATE_ARTICLES_RESULT":
           return {
                ...state,
                articlesResult: action.payload
            }
        default:
            return state
    }
}

export default articleReducer;