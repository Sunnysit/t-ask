const initState = {

    /*List of jobs data*/

    /* For comparison feature based on time*/
    jobs: [],

    /* For comparison feature based on location- USA*/
    jobsUsa: [],

    /* For comparison feature based on location- Canada*/
    jobsCanada: [],

    /* For comparison feature based on time*/
    jobsTimeSpan: [],


  
}

const jobReducer = (state = initState, action) => {
    switch (action.type) {

        case "SET_ALL_JOBS":
            return{
                ...state,
                jobs: action.payload
            }
        
        case "SET_ALL_JOBS_USA":
            return{
                ...state,
                jobsUsa: action.payload
            }

        case "SET_ALL_JOBS_CANADA":
            return{
                ...state,
                jobsCanada: action.payload
            }

        case "SET_ALL_JOBS_TIME_SPAN":
            return{
                ...state,
                jobsTimeSpan: action.payload
            }
       
        default:
            return state
    }
}

export default jobReducer;