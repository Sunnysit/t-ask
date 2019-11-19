import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Top3Switch from './Top3Switch';
import { TaskAxios } from '../../../library/TaskAxios'


const Top3Languages = () => {

    let axiosLibrary = new TaskAxios();

    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);

    const user = useSelector(state => state.user.userInfo);

    let userLanguagesId = user.favoriteLanguages;
    const [userLanguages, setUserLanguages] = useState([])


    useEffect(() => {

        axiosLibrary.comparisonLangLocation();

        //Fetch USA trending
        if (countryToggle) {
            if(userLanguagesId) {
                let rankUserLangs = languagesStateUsa.map((language,index) => {return {...language, rank: index}});
                let userLangs = rankUserLangs.filter(language => userLanguagesId.find(lang => lang === language.languageId));
                userLangs.sort((a,b) => a.rank - b.rank);
                setUserLanguages(userLangs);
            }
        } 
        //Fetch Canada trending;
        else {
            if(userLanguagesId) {
                let rankUserLangs = languagesStateCanada.map((language,index) => {return {...language, rank: index}});
                let userLangs = rankUserLangs.filter(language => userLanguagesId.find(lang => lang === language.languageId));
                userLangs.sort((a,b) => a.rank - b.rank);
                setUserLanguages(userLangs);
            }
        }

    }, [countryToggle, userLanguagesId]);

    return (
        <section className="tending-language-section">
            <p className="comparison-text">Favorite languages ranking</p>
            <div className="switch-container">
            <Top3Switch type="language" toggle={countryToggle}/>
            </div>
            <div className="trending-language-container">
                <ul className="trending-language-list">
                    {userLanguages.map((lang,index) => {
                        return <li key={lang.languageId} className="tending-language-item">
                            <p className="language-name">{lang.languageName}</p>
                            <p className="logo-container">
                                <span className="rank-text">#{lang.rank}</span>
                                <img
                                    className="language-logo"
                                    src={lang.logoUrl}
                                    alt={lang.languageName}/>
                            </p>
                            <p className="language-description">{lang.languageDescription}</p>
                        </li>
                    })
}
                </ul>
            </div>
        </section>

    );
}

export default Top3Languages;