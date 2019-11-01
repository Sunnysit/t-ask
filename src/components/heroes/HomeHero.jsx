import React from 'react';
import {useSelector} from 'react-redux';

import Comparison from '../home/comparison/Comparison'

import LineGraph from '../home/comparison/Languages/LineGraph'
import BarGraphLang from '../home/comparison/Languages/BarGraphLang'
import BarGraphJobs from '../home/comparison/Jobs/BarGraphJobs'

const HomeHero = () => {

    const graphType = useSelector(state => state.languages.graphDisplay);  

    return (
        <div className="hero-home hero">
            <h1>Welcome to T-ask</h1>
            <p>Here we explain how the comparison works</p>
            <div className="placeholder placeholder-comparison-feature">
                <p>Here is the comparison feature</p>
                <Comparison/>
                <div className="graph-container">
                    {graphType
                        ? <LineGraph/>
                        : <div className="bar-graphs">
                            <BarGraphLang/>
                            <BarGraphJobs/>
                        </div>
}

                </div>
            </div>
            {/* <BarGraph/> */}
        </div>
    )
}

export default HomeHero;