import React from 'react';
import HomeHero from '../components/heroes/HomeHero';
import Comparison from '../components/home/comparison/Comparison';
import Trending from '../components/home/trending/Trending';

const Home = () => {
    return(
        <div className="home view">
            <HomeHero />
            <Comparison />
            <Trending />
        </div>
    )
}

export default Home