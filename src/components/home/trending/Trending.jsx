import React from 'react';

import Top3Languages from './Top3Languages';
import UserPickLanguage from './UserPickLanguage';
import Top3Jobs from './Top3Jobs';
import Top10Jobs from './Top10Jobs';

const Trending = () => {


    return(
        <div className="">
            <div className="trending-languages">
                <h2>Trending Languages</h2>
                <Top3Languages/>
                <UserPickLanguage/>
            </div>

            <div className="trending-jobs">
                <h2>Trending Jobs</h2>
                <Top3Jobs/>
                <Top10Jobs/>
            </div>
        </div>
    )
}

export default Trending