import React from 'react';
import SelectLanguage from './SelectLanguages';
import LanguagesLegend from './LanguagesLegend';

const Comparison = () => {
    return(
        <div className="">
            <p>Comparison feature. Select languages to see how they behave in different aspects.</p>
            <SelectLanguage/>
            <LanguagesLegend/>
        </div>
    )
}

export default Comparison;