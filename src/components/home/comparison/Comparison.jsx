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

    }, [axiosLibrary])
    return (
        <div className="">
            <p>Comparison feature. Select languages to see how they behave in different
                aspects.</p>
            <ClickAlert/>
            <LanguagesLegend/>
            <ToggleSwitch/>
        </div>
    )
}

export default Comparison;