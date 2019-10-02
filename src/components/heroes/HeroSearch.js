import React from 'react';

const HeroSearch = () => {
    return(
        <div className="hero searchHero">
            <h1>Search results for...</h1>
            <div className="searchFilters">
                <input type="checkbox" name="searchFilter" value="job"/>Job Listing
                <input type="checkbox" name="SearchFilter" value="article"/>Article
                <input type="checkbox" name="SearchFilter" value="event"/>Event
            </div>
        </div>
    )
}

export default HeroSearch