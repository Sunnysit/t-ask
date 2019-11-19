import React from 'react';

import Top3Languages from './Top3Languages';
import Top3Jobs from './Top3Jobs';


const Trending = () => {


    return(
        <div className="card">
            <div className="trending-languages">
                <h2>Top 3 Programming languages</h2>
                <Top3Languages/>

            </div>

            <div className="trending-jobs">
                <h2>Top 3 Job Categories</h2>
                <Top3Jobs/>
            </div>
        </div>
    )
}

export default Trending