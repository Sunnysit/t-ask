import React from 'react';
import HeroAbout from '../components/heroes/HeroAbout';
import ListMembers from '../components/about/ListMembers'

const AboutUs = () => {
    return(
        <div className="about-us view">
            <HeroAbout />
            <ListMembers />
        </div>
    )
}

export default AboutUs