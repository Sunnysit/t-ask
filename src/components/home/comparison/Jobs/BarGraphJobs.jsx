import React from 'react';

import BarGraphJobsCanada from '../Jobs/BarGraphJobsCanada';
import BarGraphJobsUSA from '../Jobs/BarGraphJobsUSA';

const BarGraphJobs = () => {
    return (
        <div className="bar-graph-jobs-container">
            <BarGraphJobsCanada/>
            <BarGraphJobsUSA/>

        </div>
    )
}

export default BarGraphJobs