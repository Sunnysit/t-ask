import React, {useEffect} from 'react';

import LanguagesLegend from './LanguagesLegend';
import ToggleSwitch from './ToggleSwitch';
import ClickAlert from './ClickOutside';

import {TaskAxios} from '../../../library/TaskAxios'

const Comparison = () => {

    let axiosLibrary = new TaskAxios();

    useEffect(() => {

        // Comparison feature
        axiosLibrary.comparisonLangsMenu();
        axiosLibrary.comparisonLangTime();
        axiosLibrary.comparisonLangLocation();

        axiosLibrary.comparisonJobTime();
        axiosLibrary.comparisonJobLocation();

        // Trending feature
        axiosLibrary.featureJob();

    }, [])
    return (
        <div className="">
            <h2>Language Behavior</h2>
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