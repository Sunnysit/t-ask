import React from 'react';
import {useSelector} from 'react-redux';

const Instructions = () => {

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
                {languages.map(language => <label key={language.languageId}><input type="checkbox" value={language.languageId}/>{language.languageName}</label>)}
                </form>
                <button>Complete</button>
            </div>
        </div>
    )
}

export default Instructions