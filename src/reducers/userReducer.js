const initState = {
    userLogged: false,
    registration: false
}

const userReducer = ( state=initState, action) => {
    switch(action.type) {
        case "USER_LOGIN":
            return {
                ...state,
                userLogged: true
            }

        case "USER_REGISTRATION":
            return{
                ...state,
                registration: true
            }

        default:
            return state
    }
}

export default userReducer