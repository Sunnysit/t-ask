import React from 'react';
import { useSelector} from 'react-redux';

const LanguagesLegend = () => {

    let selectLanguages = useSelector(state=> state.languages.selectedLanguages);
    console.log(selectLanguages);

    return (
        <div className="languages-legend">
            <h3>Selected Languages:</h3>
            <ul className="legends">
            { selectLanguages.map(languages => <li value={languages.languageName} key={languages.languageName}>{languages.languageName}</li>) }

            </ul>

        </div>
    )
}

export default LanguagesLegend;