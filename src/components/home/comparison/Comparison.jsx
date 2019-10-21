import React from 'react';
import SelectLanguage from './SelectLanguages';
import LanguagesLegend from './LanguagesLegend';
import ToggleSwitch from './ToggleSwitch';

const Comparison = () => {
    return(
        <div className="">
            <p>Comparison feature. Select languages to see how they behave in different aspects.</p>
            <SelectLanguage/>
            <LanguagesLegend/>
            <ToggleSwitch/>
        </div>
    )
}

export default Comparison;