import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomeHero from '../components/heroes/HomeHero';
import Trending from '../components/home/trending/Trending';
import CallToActionSection from '../components/home/CallToActionSection';

const Home = () => {

    const dispatch = useDispatch();
 
    useEffect(() => {
        dispatch({type: "USER_SITE"})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <div className="home view">
            <HomeHero />
            <Trending />
            <CallToActionSection />
        </div>
    )
}

export default Home