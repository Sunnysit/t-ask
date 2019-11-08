import languageReducer from './languageReducer';
import jobReducer from './jobReducer';
import articleReducer from './articleReducer';
import eventReducer from './eventReducer';
import {combineReducers} from 'redux';
import userReducer from './userReducer'

//Combine all the sub reducers
const rootReducer = combineReducers({
    languages: languageReducer,
    jobs: jobReducer,
    articles:articleReducer,
    events:eventReducer,
    user:userReducer
})

export default rootReducer;