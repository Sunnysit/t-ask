import React from 'react';
import {useSelector} from 'react-redux';

import Comparison from '../home/comparison/Comparison'
import SignUpBanner from '../home/SignUpBanner'
import LineGraphLang from '../home/comparison/Languages/LineGraphLang'
import LineGraphJob from '../home/comparison/Jobs/LineGraphJob'
import BarGraphLang from '../home/comparison/Languages/BarGraphLang'
import BarGraphJobs from '../home/comparison/Jobs/BarGraphJobs'

const HomeHero = () => {

    const graphType = useSelector(state => state.languages.graphDisplay);  

    return (
        <div className="hero-home hero">
            <h1>Welcome to Task</h1>
            <p>Your go-to website to keep updated in different technologies</p>
            <SignUpBanner/>
            <div className="card placeholder-comparison-feature">
                <Comparison/>
                <div className="graph-container">
                    {graphType
                        ? ( <div className="line-graphs">
                            <LineGraphLang/>
                            <LineGraphJob/>
                            </div>)
                        : (<div className="bar-graphs">
                            <BarGraphLang/>
                            <BarGraphJobs/>
                        </div>)
}

                </div>
            </div>
        </div>
    )
}

export default HomeHero;