import React from 'react';

import BarGraphLangCanada from '../Languages/BarGraphLangCanada';
import BarGraphLangUSA from '../Languages/BarGraphLangUSA';

const BarGraphLang = () => {
    return (
        <div className="bar-graph-container">
            <BarGraphLangCanada/>
            <BarGraphLangUSA/>

        </div>
    )
}

export default BarGraphLang