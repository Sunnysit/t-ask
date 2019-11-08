const initState = {
    userLogged: false,
    registration: false,
    signUp: false
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

        case "USER_SIGNUP":
            return{
                ...state,
                signUp: true
            }

        case "USER_SITE":
            return {
                ...state,
                signUp: false
            }

        default:
            return state
    }
}

export default userReducer