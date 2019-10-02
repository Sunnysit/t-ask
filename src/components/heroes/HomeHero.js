import React from 'react';

import "../../styles/Heroes.css"

const HomeHero = () => {
    return (
        <div className="homeHero hero">
            <h1>Welcome to T-ask</h1>
            <p>Here we explain how the comparison works</p>
            <div className="placeholder comparisonFeaturePlaceholder">
                <p>Here is the comparison feature</p>
            </div>
        </div>
    )
}

export default HomeHero;