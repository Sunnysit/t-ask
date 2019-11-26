import React from 'react';
import {useSelector} from 'react-redux';

import SelectLanguage from './SelectLanguage';

const UserPickLanguage = () => {

    /* GRAB INFORMATION FROM REDUCER*/
    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const isInTop3 = useSelector(state => state.languages.isInTop3);
   
    
    return (
        <div className="select-language-body tending-language-item">
        <p className="select-language-instruction">Choose programming language</p>

        <li className="tending-language-item-container">
            <SelectLanguage/>

            <div className="language-selected-info">
                {!isInTop3 ? (
                    <div className="language-data">
                        <p className="logo-container">
                        {(selectLanguage.languageRank < 10) ? (
                                    <span className="rank-text">#0{selectLanguage.languageRank}</span>
                                ) : (
                                    <span className="rank-text">#{selectLanguage.languageRank}</span>
                                )}
                                <img
                                    className="language-logo"
                                    src={selectLanguage.logoUrl}
                                    alt={selectLanguage.languageName}/>
                            </p>
                        <p className="language-description">{selectLanguage.languageDescription}</p>

                    </div>
                ) : (
                    <p className="language-description on-top-language">This language is in the top 3. Choose another one.</p>
                )}
                
            </div>
        </li>

        </div>
        
    )
}

export default UserPickLanguage