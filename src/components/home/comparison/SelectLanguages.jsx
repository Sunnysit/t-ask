import React, {useState, useEffect} from 'react';
//import languagesArray from '../../public/assets/language-data.json'
import Axios from 'axios';

const SelectLanguage = () => {

    const [languages, setLanguages] = useState([])
    const [selectLanguages, setSelectLanguages] = useState([])

    useEffect(() => {
        Axios.get('assets/language-data.json')
        .then(result => {
            //console.log(result.data);
            const languagesArray = result.data.map((language, index) => {
                return {languageName:language.languageName, languageId:index, isSelect: false}
            })
            //console.log(languagesArray);
            setLanguages(languagesArray);
        })
        
    }, [])
    
    const [displayDropDown, setDisplayDropDown] = useState(true);
    
    let handleDropDown = () => {
        setDisplayDropDown(!displayDropDown)
    }

    const handleSelectLanguage = (e) => {
        const selectLanguageId = e.target.value;
        console.log(selectLanguageId);
        const selectLanguage = languages.map(language => {
            if(language.languageId === selectLanguageId){
                language.isSelect = !language.isSelect;
            }
            return language;
        })
        //console.log(selectLanguage);
        setLanguages(selectLanguage);
        let language = selectLanguage[selectLanguageId];

        if(language.isSelect === true){
            if( selectLanguages.length < 3){
                let currentSelect = selectLanguages;
                currentSelect.push(language);
                setSelectLanguages(currentSelect);
                console.log(selectLanguages)
            }

            else{
                let currentSelect = selectLanguages;
                let removeLanguage = currentSelect.shift();
                const newLanguages = languages.map(language => {
                    if(removeLanguage.languageName === language.languageName){
                        language.isSelect = false;
                    }
                    return language;
                })
                console.log(removeLanguage);
                currentSelect.push(language);
                setSelectLanguages(currentSelect);
                setLanguages(newLanguages);
                //language.isSelect = false;
            }
        }

        else {
            let currentSelect = selectLanguages;
            let removeLanguage = currentSelect.filter(language => language.languageId !== selectLanguageId);
            setSelectLanguages(removeLanguage);
        }
    }
    
    
    return (
        <div className="select-language-body">
            <button onClick={handleDropDown}>Languages</button>
            {!displayDropDown ? (
                <div className="drop-down active">
                    <ul className="languages">
                    { languages.map(language => <li className={language.isSelect ? 'selected' : null} onClick={handleSelectLanguage }key={language.languageId} value={language.languageId}>{language.languageName}</li>) }
                    </ul>
                </div>
            ) : (
                <div className="drop-down"></div>
            )}
            
            
        </div>
    )
}

export default SelectLanguage