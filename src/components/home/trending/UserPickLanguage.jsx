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
        dispatch({type:"SELECT_TRENDING_LANGUAGE", payload:language})
        
    }
    
    
    return (
        <li className="select-language-body tending-language-item">
            <p>Trending language for user to choose</p>

            <p>Language</p>
            <select onChange={handleSelectLanguage}>
                <option value="" defaultValue disabled hidden>Language</option>
            { languagesDropDown.map((language,index) => <option key={index} value={language.languageId}>{language.languageName}</option>) }
            </select> 

            <div className="language-selected-info">
                {!isInTop3 ? (
                    <div className="language-data">
                        <p>Language name: {selectLanguage.languageName}</p> 
                        <p>Ranking: {selectLanguage.languageRank}</p>
                        <p>{selectLanguage.languageDescription}</p>
                    </div>
                ) : (
                    <p>This language is in the top 3. Choose another one.</p>
                )}
                
            </div>
        </li>
    )
}

export default UserPickLanguage