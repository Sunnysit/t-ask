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

    /* For trending top 3 feature based on location- USA*/
    jobCategoryDataUsa: [],

    /* For trending top 3 feature based on location- Canada*/
    jobCategoryDataCanada: [],

    top3JobToggle: true,

    /* For trending feature*/
    jobTrending: {},

    isInTop3: true
}

const jobReducer = (state = initState, action) => {
    switch (action.type) {

        case "SET_ALL_JOBS":
            return {
                ...state,
                jobs: action.payload
            }

        case "SET_ALL_JOBS_USA":
            return {
                ...state,
                jobsUsa: action.payload
            }

        case "SET_ALL_JOBS_CANADA":
            return {
                ...state,
                jobsCanada: action.payload
            }

        case "SET_ALL_JOBS_TIME_SPAN":
            return {
                ...state,
                jobsTimeSpan: action.payload
            }

        case "SET_ALL_JOBS_CATEGORY_USA":
            return {
                ...state,
                jobCategoryDataUsa: action.payload
            }

        case "SET_ALL_JOBS_CATEGORY_CANADA":
            return {
                ...state,
                jobCategoryDataCanada: action.payload
            }

        case "SELECT_TRENDING_JOB":
            return {
                ...state,
                jobTrending: action.payload
            }

        case "SWITCH_TOP3_COUNTRY_JOB":
            {
                return {
                    ...state,
                    top3JobToggle: !state.top3JobToggle
                }
            }

        case "JOB_IS_NOT_IN_TOP_3" :{
            return {
                ...state,
                isInTop3: false
            }
        }

        case "JOB_IS_IN_TOP_3" :{
            return {
                ...state,
                isInTop3: true
            }
        }

        default:
            return state
    }
}

export default jobReducer;