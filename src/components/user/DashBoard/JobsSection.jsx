import React from 'react';
import Top3Jobs from './Top3Jobs';

const JobsSection = () => {


    return(
        <div className="jobs-section">
        <p className="comparison-text">Popular Job Categories</p>
            <Top3Jobs/>
        </div>
    )
}

export default JobsSection