import React from 'react';

import BarGraphLangCanada from './BarGraphLangCanada';
import BarGraphLangUSA from './BarGraphLangUSA';

const BarGraphLang = () => {
    return (
        <div className="bar-graph-container">
            <BarGraphLangCanada/>
            <BarGraphLangUSA/>

        </div>
    )
}

export default BarGraphLang