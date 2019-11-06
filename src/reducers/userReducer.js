const initState = {
    userLogged: false
}

const userReducer = ( state=initState, action) => {
    switch(action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                userLogged: true
            }

        default:
            return state
    }
}

export default userReducer