import React from 'react';
import HomeHero from '../components/heroes/HomeHero';
import Trending from '../components/home/trending/Trending';
import CallToActionSection from '../components/home/CallToActionSection';

const Home = () => {
    return(
        <div className="home view">
            <HomeHero />
            <Trending />
            <CallToActionSection />
        </div>
    )
}

export default Home