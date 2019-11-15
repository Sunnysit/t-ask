import React from 'react';

import BarGraphLangCanada from './BarGraphLangCanada';
import BarGraphLangLegend from './BarGraphLangLegend'
import BarGraphLangUSA from './BarGraphLangUSA';

const BarGraphLang = () => {
    return (
        <div className="bar-graph-lang">
            <p className="graph-name">Use of Language</p>
            <div className="bar-graph-lang-container">
            <BarGraphLangCanada/>
            <BarGraphLangLegend/>
            <BarGraphLangUSA/>
            </div>
        </div>
    )
}

export default BarGraphLang