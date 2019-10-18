import React from 'react';
import Top3Languages from '../components/home/trending/Top3Languages';
import Top10Languages from '../components/home/trending/Top10Languages';
import Top3Jobs from '../components/home/trending/Top3Jobs';
import Top10Jobs from '../components/home/trending/Top10Jobs';

const Trending = () => {
    return(
        <div className="">
            <Top3Languages/>
            <Top10Languages/>
            <Top3Jobs/>
            <Top10Jobs/>

        </div>
    )
}

export default Trending