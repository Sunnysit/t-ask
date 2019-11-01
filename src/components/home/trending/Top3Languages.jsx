import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import UserPickLanguage from './UserPickLanguage';
import Top3Switch from './Top3Switch';

const Top3Languages = () => {

    const [top3Languages,
        setTop3Languages] = useState([])

    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);

    useEffect(() => {

        let top3LangArray = [];
        //Fetch USA trending
        if (countryToggle) {
            if (languagesStateUsa.length >= 3) {
                for (let i = 0; i < 3; i++) {
                    top3LangArray.push(languagesStateUsa[i]);
                }
                setTop3Languages(top3LangArray)
            }
        } 
        //Fetch Canada trending;
        else {
            if (languagesStateCanada.length >= 3) {
                for (let i = 0; i < 3; i++) {
                    top3LangArray.push(languagesStateCanada[i]);
                }
                setTop3Languages(top3LangArray);
            }
        }

    }, [languagesStateUsa, languagesStateCanada, countryToggle]);

    return (
        <section className="tending-language-section">
            <div className="switch-container">
                <Top3Switch/>
            </div>
            <div className="trending-language-container">
                <ul className="trending-language-list">
                    {top3Languages.map((lang,index) => {
                        return <li key={lang.languageId} className="tending-language-item">
                            <p className="logo-name">{lang.languageName}</p>
                            <p className="logo-container">
                                <span className="rank-text">#0{index+1}</span>
                                <img
                                    className="language-logo"
                                    src={lang.logoUrl}
                                    alt={lang.languageName}/>
                            </p>
                            <p className="language-description">{lang.languageDescription}</p>
                        </li>
                    })
}
                    <UserPickLanguage/>
                </ul>
            </div>
        </section>

    );
}

export default Top3Languages;