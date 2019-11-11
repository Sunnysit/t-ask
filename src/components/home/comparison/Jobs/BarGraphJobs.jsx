import React from 'react';

import BarGraphJobsCanada from './BarGraphJobsCanada';
import BarGraphJobsLegend from './BarGraphJobsLegend'
import BarGraphJobsUSA from './BarGraphJobsUSA';

const BarGraphJobs = () => {
    return (
        <div className="bar-graph-jobs-container">
            <BarGraphJobsCanada/>
            <BarGraphJobsLegend/>
            <BarGraphJobsUSA/>

        </div>
    )
}

export default BarGraphJobs