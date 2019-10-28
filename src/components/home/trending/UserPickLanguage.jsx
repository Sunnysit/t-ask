import React ,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const UserPickLanguage = () => {

    const [remainingLanguageRank,setRemainingLanguageRank] = useState([]);

    /* GRAB INFORMATION FROM REDUCER*/
    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);

    const dispatch = useDispatch();

    useEffect(()=>{
        let remainData = [];
        //Fetch US data
        if(countryToggle)
        {
           remainData = languagesStateUsa.filter(language => language.languageRank > 3);
        }
        //Fetch Canada data
        else
        {
           remainData = languagesStateCanada.filter(language => language.languageRank > 3);
        }

        setRemainingLanguageRank(remainData);

    },[countryToggle,languagesStateUsa,languagesStateCanada]);

    const handleSelectLanguage = (e) => {
        const selectLanguageId = e.target.value;
        let language = remainingLanguageRank[selectLanguageId]; 

        dispatch({type:"SELECT_TRENDING_LANGUAGE", payload:language})
        
    }
    
    
    return (
        <li className="select-language-body tending-language-item">
            <p>Trending language for user to choose</p>

            <p>Language</p>
            <select onChange={handleSelectLanguage}>
                <option value="" defaultValue disabled hidden>Language</option>
            { remainingLanguageRank.map((language,index) => <option key={index} value={index}>{language.languageName}</option>) }
            </select> 

            <div className="language-selected-info">
                <p>Language name: {selectLanguage.languageName}</p> 
                <p>Ranking: {selectLanguage.languageRank}</p>
            </div>
        </li>
    )
}

export default UserPickLanguage