import React from 'react';
import { useSelector} from 'react-redux';

const LanguagesLegend = () => {

    let selectLanguages = useSelector(state=> state.languages.selectedLanguages);

    return (
        <div className="languages-selected">
            <p className="comparison-text">Chosen languages</p>
            <ul className="legends">
            { selectLanguages.map(languages => <li value={languages.languageName} key={languages.languageName}><p className="color-legend">a</p>{languages.languageName}</li>) }

            </ul>

        </div>
    )
}

export default LanguagesLegend;