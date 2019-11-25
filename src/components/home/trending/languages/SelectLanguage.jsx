import React, { useRef, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

const SelectLanguage = () => {

    /*set useRef*/
    const nameRef = useRef(null);

    /* SAVE TO LOCAL STATE*/
    // const [languages, setLanguages] = useState([]) const [selectLanguages,
    // setSelectLanguages] = useState([])

    /* GRAB INFORMATION FROM REDUCER*/
    //const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    //const languagesState = useSelector(state => state.languages.languages);
    //const dropDown = useSelector(state => state.languages.dropDown);


    //console.log(languagesState); console.log(selectLanguages);

    const dispatch = useDispatch();

    //const [displayDropDown, setDisplayDropDown] = useState(true);

    

    // const handleSelectLanguage = (e) => {
    //     const selectLanguageId = e.target.value;
    //     //console.log(selectLanguageId);
    //     let languageIndex;
    //     const selectLanguage = languagesState.map((language, index) => {
    //         if (language.languageId === selectLanguageId) {
    //             //console.log(language.languageId); console.log(selectLanguageId);
    //             language.isSelect = !language.isSelect;
    //             languageIndex = index;

    //         }
    //         return language;
    //     })
    //     //console.log(selectLanguage); setLanguages(selectLanguage);
    //     let language = selectLanguage[languageIndex];
    //     //console.log(language);

    //     if (language.isSelect === true) {
    //         if (selectLanguages.length < 3) {

    //             /* CHANGE SELECTED LANGUAGES IN LOCAL STATE*/
    //             // let currentSelect = selectLanguages; currentSelect.push(language);
    //             // setSelectLanguages(currentSelect); console.log(currentSelect);

    //             /* ADD SELECTED LANGUAGE TO REDUCER*/
    //             dispatch({type: 'ADD_SELECTED_LANGUAGES', payload: language});
    //         } else {
    //             let currentSelect = selectLanguages;
    //             let removeLanguage = currentSelect.shift();

    //             /* CHANGE IS SELECTED PROPERTY TO FALSE FOR THE FIRST LANGUAGE IN ARRAY WHEN SELECTING A FOURTH LANGUAGE*/
    //             languagesState.map(language => {
    //                 if (removeLanguage.languageName === language.languageName) {
    //                     language.isSelect = false;
    //                 }

    //                 return language;
    //             })

    //             /* CHANGE SELECTED LANGUAGES IN LOCAL STATE*/
    //             // console.log(removeLanguage); currentSelect.push(language);
    //             // setSelectLanguages(currentSelect); setLanguages(newLanguages);

    //             /* UPDATE SELECTED LANGUAGE TO REDUCER*/
    //             dispatch({type: 'UPDATE_SELECTED_LANGUAGES', payload: language});
    //         }
    //     } else {
    //         let currentSelect = selectLanguages;
    //         let removeLanguage = currentSelect.filter(language => language.languageId !== selectLanguageId);

    //         //setSelectLanguages(removeLanguage);

    //         /* REMOVE SELECTED LANGUAGE TO REDUCER*/
    //         dispatch({type: 'REMOVE_SELECTED_LANGUAGES', payload: removeLanguage});
    //     }
    // }

    const [languageRank,setLanguageRank] = useState([]);
    const [languagesDropDown, setLanguagesDropDown] = useState([]);
    const [dropDown, setDropDown] = useState(true);

    const selectLanguage = useSelector(state => state.languages.languageTrending);
    const languagesStateUsa = useSelector(state => state.languages.languageTrendingDataUsa);
    const languagesStateCanada = useSelector(state => state.languages.languageTrendingDataCanada);
    const countryToggle = useSelector(state => state.languages.top3LangToggle);
    //const isInTop3 = useSelector(state => state.languages.isInTop3);

    useEffect(()=>{
        let remainData = [];
        //Fetch US data

        let dataUsa = languagesStateUsa.map((language, index) => {
            if(index === 0) {
                return {...language, isSelect: true}
            } return (
            {...language, isSelect: false}
        )})

        setLanguagesDropDown(dataUsa);
        if(countryToggle)
        {
            remainData = languagesStateUsa;
        }
        //Fetch Canada data
        else
        {
           remainData = languagesStateCanada;
        }

        let remainDataComplete = remainData.map(language => {return (
            {...language, isSelect: false}
        )})

        setLanguageRank(remainDataComplete);

    },[countryToggle,languagesStateUsa,languagesStateCanada]);

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

        const selectedLanguage = languagesDropDown.map((language, index) => {
            if (language.languageId === selectLanguageId) {
            //console.log(language.languageId); console.log(selectLanguageId);
                language.isSelect = !language.isSelect;
                languageIndex = index;
        
            }
            return language;
        })

        setLanguagesDropDown(selectedLanguage);

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
        dispatch({type:"SELECT_TRENDING_LANGUAGE", payload:language});
        setDropDown(!dropDown);
        
    }

    console.log(languagesDropDown);

    return (
        <div className="select-language" ref={nameRef}>
            <div className="select-language-list">
                <button onClick={handleDropDown} className=" language-name drop-down-menu">{ selectLanguage.languageName }
                    <span className="drop-down-icon">&#9662;</span></button>
                    {/* <select onChange={handleSelectLanguage} className="language-name">
                <option value="" defaultValue disabled hidden>Language</option>
            { languagesDropDown.map((language,index) => <option key={index} value={language.languageId}>{language.languageName}</option>) }
            </select>  */}
                {!dropDown
                    ? (

                        
                        <div className="drop-down active">
                            <ul className="languages">
                                {languagesDropDown.map(language => <li
                                    className={language.isSelect
                                    ? 'selected'
                                    : null}
                                    onClick={handleSelectLanguage}
                                    value={language.languageId}key={language.languageId} >{language.languageName}
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