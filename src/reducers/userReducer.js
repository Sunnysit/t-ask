const initState = {
    userLogged: false,
    registration: false,
    signUp: false,
    userInfo: {}
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

        case "USER_REGISTRATION_BACK":
            return{
                ...state,
                registration: false
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

        case "USER_INFO":
            return{
                ...state,
                userInfo: action.payload
            }
        case "USER_LOG_OUT":
            return{
                ...state,
                userInfo: {},
                userLogged: false,
            }

        default:
            return state
    }
}

export default userReducer