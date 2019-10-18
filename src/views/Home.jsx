import React from 'react';
import HomeHero from '../components/heroes/HomeHero';
import Comparison from './Comparison';
import Trending from './Trending'

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