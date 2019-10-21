import React from 'react';
import Comparison from '../home/comparison/Comparison'
import LineGraph from '../home/comparison/LineGraph'

const HomeHero = () => {
    return (
        <div className="hero-home hero">
            <h1>Welcome to T-ask</h1>
            <p>Here we explain how the comparison works</p>
            <div className="placeholder placeholder-comparison-feature">
                <p>Here is the comparison feature</p>
                <Comparison/>
                <div className="graph-container">
                <LineGraph/>

                </div>
            </div>
        </div>
    )
}

export default HomeHero;