import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const BarGraphLangLegend = () => {

    const languages = useSelector(state => state.languages.selectedLanguages);
    const [firstLang, setFirstLang] = useState('')
    //console.log(firstLang);

    const [ifSecondLanguage, setIfSecondLanguage] = useState(false);
    const [secondLang, setSecondLang]= useState('')

    const [ifThirdLanguage, setIfThirdLanguage] = useState(false);
    const [thirdLang, setThirdLang] = useState('')

    useEffect(() => {

        setFirstLang(languages[0].languageName);

        if(languages[1]){
            setSecondLang(languages[1].languageName);
            setIfSecondLanguage(true);
            //console.log(secondLang);
        }

        else{
            setIfThirdLanguage(false);
        }

        if(languages[2]){
            setThirdLang(languages[2].languageName);
            setIfThirdLanguage(true);
            //console.log(thirdLang);
        }
        else{
            setIfThirdLanguage(false);
        }

        
    
    }, [languages, secondLang, thirdLang])

    

    return (
        <div className="languages-legend">
            {ifThirdLanguage ? (
                <div className="third-language">
                <p className="color-legend">a</p>
                <p>{thirdLang}</p>
            </div>
            ) : (
            <div className="no-lang"></div>    
            )}

            {ifSecondLanguage ? (
                <div className="second-language">
                    <p className="color-legend">a</p>
                    <p>{secondLang}</p>
                </div>
            ) : (
                <div className="no-lang"></div>
            )}
            
            <div className="first-language">
                <p className="color-legend">a</p>
                <p>{firstLang}</p>
            </div>

        </div>
    )
}

export default BarGraphLangLegend