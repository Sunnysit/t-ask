import React from 'react';

const HeroSearch = () => {
    return(
        <div className="hero hero-search">
            <h1>Search results for...</h1>
            <div className="search-filters">
                <input type="checkbox" name="searchFilter" value="job"/>Job Listing
                <input type="checkbox" name="SearchFilter" value="article"/>Article
                <input type="checkbox" name="SearchFilter" value="event"/>Event
            </div>
        </div>
    )
}

export default HeroSearch