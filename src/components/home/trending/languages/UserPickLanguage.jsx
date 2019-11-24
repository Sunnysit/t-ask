import React ,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UserPickLanguage = () => {

    const [languageRank,setLanguageRank] = useState([]);
    const [languagesDropDown, setLanguagesDropDown] = useState([]);

    /* GRAB INFORMATION FROM REDUCER*/
    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);
    const isInTop3 = useSelector(state => state.languages.isInTop3);

    const dispatch = useDispatch();

    useEffect(()=>{
        let remainData = [];
        //Fetch US data
        setLanguagesDropDown(languagesStateUsa);
        if(countryToggle)
        {
           remainData = languagesStateUsa;
        }
        //Fetch Canada data
        else
        {
           remainData = languagesStateCanada;
        }

        setLanguageRank(remainData);

    },[countryToggle,languagesStateUsa,languagesStateCanada]);

    const handleSelectLanguage = (e) => {
        const selectLanguageId = Number(e.target.value);

        let languageIndex;

        languageRank.map((language, index) => {
            if (language.languageId === selectLanguageId){
                if(index < 3){
                    dispatch({type:"LANGUAGE_IS_IN_TOP_3"});
                }
                else{
                    dispatch({type:"LANGUAGE_IS_NOT_IN_TOP_3"});
                }
                languageIndex = index;
            }
            return language;
        })

        const language = languageRank[languageIndex];
        console.log(language);
        dispatch({type:"SELECT_TRENDING_LANGUAGE", payload:language})
        
    }
    
    
    return (
        <div className="select-language-body tending-language-item">
        <p className="select-language-instruction">Choose programming language</p>

        <li className="tending-language-item-container">
            <select onChange={handleSelectLanguage} className="language-name">
                <option value="" defaultValue disabled hidden>Language</option>
            { languagesDropDown.map((language,index) => <option key={index} value={language.languageId}>{language.languageName}</option>) }
            </select> 

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