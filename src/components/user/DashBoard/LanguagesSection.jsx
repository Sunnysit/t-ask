import React from 'react';
import {useSelector} from 'react-redux';
import Top3Languages from './Top3Languages';

const LanguagesSection = () => {

    const user = useSelector(state => state.user.userInfo);
    const languages = useSelector(state => state.languages.languages);

    let userLanguagesId = user.favoriteLanguages;

    let userLanguages;

    if (userLanguagesId) {
        userLanguages = languages.filter(language => userLanguagesId.find(lang => lang === language.languageId));

    }
    return (
        <div className="languages-section">
            <div className="mobile">

                <Top3Languages/>
            </div>
            <div className="desktop">
                <p className="comparison-text">Favorite Languages</p>
                {userLanguages
                    ? (
                        <ul className="selected-languages">
                            {userLanguages.map((languages, index) => <li key={index}>{languages.languageName}</li>)}

                        </ul>
                    )
                    : (
                        <ul></ul>
                    )}
                <Top3Languages/>
            </div>
        </div>
    )
}

export default LanguagesSection