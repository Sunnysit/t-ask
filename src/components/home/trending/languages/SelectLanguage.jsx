import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const SelectLanguage = () => {

    /*set useRef*/
    const nameRef = useRef(null);

    const dispatch = useDispatch();

    const [languageRank,
        setLanguageRank] = useState([]);
    // const [languagesDropDown,
    //     setLanguagesDropDown] = useState([]);
    const [dropDown,
        setDropDown] = useState(true);

    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);

    useEffect(() => {
        let remainData = [];

        if (countryToggle) {
            remainData =//Fetch Canada data
            languagesStateUsa;
        } else {
            remainData = languagesStateCanada;
        }

        let remainDataComplete = remainData.map(language => {
            return ({
                ...language,
                isSelect: false
            })
        })

        setLanguageRank(remainDataComplete);

    }, [countryToggle, languagesStateUsa, languagesStateCanada]);

    let handleDropDown = (e) => {
        if (nameRef.current.contains(e.target)) {
            //console.log(nameRef.current);
            setDropDown(!dropDown);
        }
    }

    const handleSelectLanguage = (e) => {
        const selectLanguageId = Number(e.target.value);
        console.log(selectLanguageId);

        let languageIndex;

        languagesStateUsa.map((language, index) => {
            if (language.languageId === selectLanguageId) {
                //console.log(language.languageId); console.log(selectLanguageId);
                language.isSelect = !language.isSelect;
                languageIndex = index;

            } else {
                language.isSelect = false;
            }
            return language;
        })

        languageRank.map((language, index) => {
            if (language.languageId === selectLanguageId) {
                if (index < 3) {
                    dispatch({type: "LANGUAGE_IS_IN_TOP_3"});
                } else {
                    dispatch({type: "LANGUAGE_IS_NOT_IN_TOP_3"});
                }
                languageIndex = index;
            }
            return language;
        })

        const language = languageRank[languageIndex];
        console.log(language);
        dispatch({type: "SELECT_TRENDING_LANGUAGE", payload: language});
        setDropDown(!dropDown);

    }

    //console.log(selectLanguage);

    return (
        <div className="select-language" ref={nameRef}>
            <div className="select-language-list">
                <button onClick={handleDropDown} className=" language-name drop-down-menu">{selectLanguage.languageName}
                    <span className="drop-down-icon">&#9662;</span>
                </button>
                {!dropDown
                    ? (

                        <div className="drop-down active">
                            <ul className="languages">
                                {languagesStateUsa.map(language => <li
                                    className={language.isSelect
                                    ? 'selected'
                                    : null}
                                    onClick={handleSelectLanguage}
                                    value={language.languageId}
                                    key={language.languageId}>{language.languageName}
                                    <span>&#10004;</span>
                                </li>)}
                            </ul>
                        </div>
                    )
                    : (
                        <div className="drop-down"></div>
                    )}
            </div>

        </div>
    )
}

export default SelectLanguage