import React from 'react';
import LanguagesLegend from './LanguagesLegend';
import ToggleSwitch from './ToggleSwitch';
import ClickAlert from './ClickOutside';

const Comparison = () => {

    return (
        <div className="">
            <h2>Language Popularity</h2>
            <p>Use the dropdown menu below to choose up to three development languages.
                Change the switch and compare them either by location or by time.
            </p>
            <div className="comparison-settings">
                <ClickAlert/>
                <LanguagesLegend/>
            </div>
            <ToggleSwitch/>
        </div>
    )
}

export default Comparison;