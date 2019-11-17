import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { TaskAxios } from '../../../library/TaskAxios'

const Top3Languages = () => {

    const dispatch = useDispatch();

    let axiosLibrary = new TaskAxios();
    const user = useSelector(state => state.user.userInfo);
    const languages = useSelector(state => state.languages.languages);

    let userLanguagesId = user.favoriteLanguages;

    let userLanguages;


    useEffect(() => {

        axiosLibrary.comparisonLangsMenu();
        
    }, [axiosLibrary])

    if(userLanguagesId) {
        userLanguages = languages.filter(language => userLanguagesId.find(lang => lang === language.languageId));

    }


    return(
        <div className="top-languages">
            {userLanguages ? (
                <ul>
                {userLanguages.map( (languages, index) => <li key={index}>{languages.languageName}</li>)}

                </ul>
            ) : (
                <ul></ul>
            )}
        </div>
    )
}

export default Top3Languages;