import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeroAbout from '../components/heroes/HeroAbout';
import ListMembers from '../components/about/ListMembers';

const AboutUs = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SITE"})
    }, [dispatch])
    return (
        <div className="about-us" id="view">
            <HeroAbout/>
            <ListMembers/>
        </div>
    )
}

export default AboutUs