import React from 'react';
import HomeHero from '../components/heroes/HomeHero';
import Trending from '../components/home/trending/Trending';

const Home = () => {
    return(
        <div className="home view">
            <HomeHero />
            <Trending />
        </div>
    )
}

export default Home