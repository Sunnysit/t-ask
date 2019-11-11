import React from 'react';
import { useSelector } from 'react-redux';

const BarGraphLangLegend = () => {

    const languages = useSelector(state => state.languages.selectedLanguages);
    const firstLang = languages[0].languageName;
    console.log(firstLang);
    const secondLang = languages[1].languageName;
    console.log(secondLang);
    const thirdLang = languages[2].languageName;
    console.log(thirdLang);
    return (
        <div className="jobs-legend">
            <div className="third-language">
                <p className="color-legend">a</p>
                <p>{thirdLang}</p>
            </div>
            <div className="second-language">
                <p className="color-legend">a</p>
                <p>{secondLang}</p>
            </div>
            <div className="first-language">
                <p className="color-legend">a</p>
                <p>{firstLang}</p>
            </div>

        </div>
    )
}

export default BarGraphLangLegend