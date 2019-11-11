import React from 'react';

import BarGraphLangCanada from './BarGraphLangCanada';
import BarGraphLangLegend from './BarGraphLangLegend'
import BarGraphLangUSA from './BarGraphLangUSA';

const BarGraphLang = () => {
    return (
        <div className="bar-graph-lang-container">
            <BarGraphLangCanada/>
            <BarGraphLangLegend/>
            <BarGraphLangUSA/>

        </div>
    )
}

export default BarGraphLang