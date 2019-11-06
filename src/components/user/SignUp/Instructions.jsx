import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import Axios from 'axios'

const Instructions = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/comparison/languages')
            .then(result => {
                const languagesArray = result
                    .data
                    .map(language => {
                        return {languageName: language.name, languageId: language.id_language};
                    })
                dispatch({type: "SET_ALL_LANGUAGES", payload: languagesArray});
            })
    }, [dispatch])


    

    const languages = useSelector(state => state.languages.languages);
    console.log(languages);
    return (
        <div className="signup-instructions">
            <div className="step1-instructions">
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id="Name"/>
                <label htmlFor="Email">Email</label>
                <input type="email" name="Email" id="Email"/>
                <label htmlFor="Password">Password</label>
                <input type="text" name="Password" id="Password"/>
                <button>Next step</button>
            </div>
            <div className="step2-instructions">
                <form action="">
                {languages.map(language => <label key={language.languageName}><input type="checkbox" value={language.languageId}/>{language.languageName}</label>)}
                </form>
                <button>Complete</button>
            </div>
        </div>
    )
}

export default Instructions