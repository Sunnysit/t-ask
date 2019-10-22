import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UserPickLanguage = () => {


    /* GRAB INFORMATION FROM REDUCER*/
    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const languagesState = useSelector(state => state.languages.languageTrendingDataUsa);

    const remainingLanguageRank = languagesState.filter(language => language.languageRank > 3);

    const dispatch = useDispatch();


    const handleSelectLanguage = (e) => {
        const selectLanguageId = e.target.value;
        
        let language = languagesState[selectLanguageId]; 
        dispatch({type:"SELECT_TRENDING_LANGUAGE", payload:language})
        
    }
    
    
    return (
        <div className="select-language-body">
            <p>Trending language for user to choose</p>
            <select onChange={handleSelectLanguage}>
                <option value="default">Select language</option>
            { remainingLanguageRank.map(language => <option key={language.languageId} value={language.languageId}>{language.languageName}</option>) }
            </select> 

            <div className="language-selected-info">
                <p>Language name: {selectLanguage.languageName}</p> 
                <p>Ranking: {selectLanguage.languageRank}</p>
            </div>
        </div>
    )
}

export default UserPickLanguage