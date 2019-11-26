import React from 'react';

import Top3Languages from './languages/Top3Languages';
import Top3Jobs from './jobs/Top3Jobs';
import LearnMore from './LearnMore';

const Trending = () => {

    return (
        <div className="card rank-feature">
            <h2>Language and Job Rank</h2>
            <p className="section-description">In this section, you will find the top 3 programming languages and the top 3
                job categories in the IT industry. Change the switch to show the ranking for
                Canada or the USA.
            </p>
            <div className="trending-languages">
                <h3>Top 3 Programming languages</h3>
                <Top3Languages/>

            </div>

            <div className="trending-jobs">
                <h3>Top 3 Job Categories</h3>
                <Top3Jobs/>
            </div>

            <div className="learn-more">
                <p>Learn more</p>
                <LearnMore/>
            </div>
        </div>
    )
}

export default Trending