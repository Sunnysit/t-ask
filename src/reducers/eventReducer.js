const initState = {

    eventList:[]
  
}

const eventReducer = (state = initState, action) => {
    switch (action.type) {
       
        case "UPDATE_EVENT_LIST":
            return {
                ...state,
                eventList: action.payload
            }

        default:
            return state
    }
}

export default eventReducer;