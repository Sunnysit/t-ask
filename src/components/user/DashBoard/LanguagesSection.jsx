import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TaskAxios } from '../../../library/TaskAxios';
import Top3Languages from './Top3Languages';

const LanguagesSection = () => {

    let axiosLibrary = new TaskAxios();
    const user = useSelector(state => state.user.userInfo);
    const languages = useSelector(state => state.languages.languages);

    let userLanguagesId = user.favoriteLanguages;

    let userLanguages;


    useEffect(() => {

        axiosLibrary.comparisonLangsMenu();
        axiosLibrary.comparisonLangLocation();
        
    }, [axiosLibrary])

    if(userLanguagesId) {
        userLanguages = languages.filter(language => userLanguagesId.find(lang => lang === language.languageId));

    }
    return(
        <div className="languages-section">
        <p className="comparison-text">Favorite Languages</p>
            {userLanguages ? (
                <ul className="selected-languages">
                {userLanguages.map( (languages, index) => <li key={index}>{languages.languageName}</li>)}

                </ul>
            ) : (
                <ul></ul>
            )}
        <Top3Languages/>
        </div>
    )
}

export default LanguagesSection