import React from 'react';
import Top3Languages from './Top3Languages';
import UserPickLanguage from './UserPickLanguage';
import Top3Jobs from './Top3Jobs';
import Top10Jobs from './Top10Jobs';

const Trending = () => {
    return(
        <div className="">
            <Top3Languages/>
            <UserPickLanguage/>
            <Top3Jobs/>
            <Top10Jobs/>

        </div>
    )
}

export default Trending