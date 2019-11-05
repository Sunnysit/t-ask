import React from 'react';
import {useSelector} from 'react-redux';

const Instructions = () => {

    const languages = useSelector(state => state.languages.languages);
    console.log(languages);
    return (
        <div className="signup-instructions">
            <div className="step1-instructions">
                <label htmlFor="Name"></label>
                <input type="text" name="Name" id="Name"/>
                <label htmlFor="Email"></label>
                <input type="email" name="Email" id="Email"/>
                <label htmlFor="Password"></label>
                <input type="text" name="Password" id="Password"/>
                <button>Next step</button>
            </div>
            <div className="step2-instructions">
                <ul className="languages">
                    {languages.map(language => <li key={language.languageId} value={language.languageId}>{language.languageName}</li>)}
                </ul>
                <button>Complete</button>
            </div>
        </div>
    )
}

export default Instructions