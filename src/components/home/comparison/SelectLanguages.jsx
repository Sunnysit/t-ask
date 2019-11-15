import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SelectLanguage = () => {

    /*set useRef*/
    const nameRef = useRef(null);

    /* SAVE TO LOCAL STATE*/
    // const [languages, setLanguages] = useState([]) const [selectLanguages,
    // setSelectLanguages] = useState([])

    /* GRAB INFORMATION FROM REDUCER*/
    const selectLanguages = useSelector(state => state.languages.selectedLanguages);
    const languagesState = useSelector(state => state.languages.languages);
    const dropDown = useSelector(state => state.languages.dropDown);

    //console.log(languagesState); console.log(selectLanguages);

    const dispatch = useDispatch();

    //const [displayDropDown, setDisplayDropDown] = useState(true);

    let handleDropDown = (e) => {
        if (nameRef.current.contains(e.target)) {
            //console.log(nameRef.current);
            dispatch({type: "DROPDOWN"});
        }
    }

    const handleSelectLanguage = (e) => {
        const selectLanguageId = e.target.value;
        //console.log(selectLanguageId);
        let languageIndex;
        const selectLanguage = languagesState.map((language, index) => {
            if (language.languageId === selectLanguageId) {
                //console.log(language.languageId); console.log(selectLanguageId);
                language.isSelect = !language.isSelect;
                languageIndex = index;

            }
            return language;
        })
        //console.log(selectLanguage); setLanguages(selectLanguage);
        let language = selectLanguage[languageIndex];
        //console.log(language);

        if (language.isSelect === true) {
            if (selectLanguages.length < 3) {

                /* CHANGE SELECTED LANGUAGES IN LOCAL STATE*/
                // let currentSelect = selectLanguages; currentSelect.push(language);
                // setSelectLanguages(currentSelect); console.log(currentSelect);

                /* ADD SELECTED LANGUAGE TO REDUCER*/
                dispatch({type: 'ADD_SELECTED_LANGUAGES', payload: language});
            } else {
                let currentSelect = selectLanguages;
                let removeLanguage = currentSelect.shift();

                /* CHANGE IS SELECTED PROPERTY TO FALSE FOR THE FIRST LANGUAGE IN ARRAY WHEN SELECTING A FOURTH LANGUAGE*/
                languagesState.map(language => {
                    if (removeLanguage.languageName === language.languageName) {
                        language.isSelect = false;
                    }

                    return language;
                })

                /* CHANGE SELECTED LANGUAGES IN LOCAL STATE*/
                // console.log(removeLanguage); currentSelect.push(language);
                // setSelectLanguages(currentSelect); setLanguages(newLanguages);

                /* UPDATE SELECTED LANGUAGE TO REDUCER*/
                dispatch({type: 'UPDATE_SELECTED_LANGUAGES', payload: language});
            }
        } else {
            let currentSelect = selectLanguages;
            let removeLanguage = currentSelect.filter(language => language.languageId !== selectLanguageId);

            //setSelectLanguages(removeLanguage);

            /* REMOVE SELECTED LANGUAGE TO REDUCER*/
            dispatch({type: 'REMOVE_SELECTED_LANGUAGES', payload: removeLanguage});
        }
    }

    return (
        <div className="select-language" ref={nameRef}>
            <p className="comparison-text">Choose languages</p>
            <div className="select-language-body">
                <button onClick={handleDropDown} className="drop-down-menu">Select up to 3 languages
                    <FontAwesomeIcon icon={'caret-down'} className="drop-down-icon" size="2x"/></button>
                {!dropDown
                    ? (
                        <div className="drop-down active">
                            <ul className="languages">
                                {languagesState.map(language => <li
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