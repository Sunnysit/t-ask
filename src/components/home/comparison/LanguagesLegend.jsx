import React from 'react';
import { useSelector} from 'react-redux';

const LanguagesLegend = () => {

    let selectLanguages = useSelector(state=> state.languages.selectedLanguages);
    selectLanguages.sort((a,b) => {
        return a.languageId - b.languageId;
    })

    return (
        <div className="languages-selected">
            <p className="comparison-text">Chosen languages: </p>
            <ul className="legends">
            { selectLanguages.map(languages => <li value={languages.languageName} key={languages.languageName}><p className="color-legend"></p>{languages.languageName}</li>) }

            </ul>

        </div>
    )
}

export default LanguagesLegend;