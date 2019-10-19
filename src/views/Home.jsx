import React from 'react';
import HomeHero from '../components/heroes/HomeHero';
import Comparison from '../components/home/comparison/Comparison';
import Trending from '../components/home/trending/Trending';
import LineGraph from '../components/home/comparison/LineGraph';

const Home = () => {
    return(
        <div className="home view">
            <HomeHero />
            <Comparison />
            <LineGraph />
            <Trending />
        </div>
    )
}

export default Home