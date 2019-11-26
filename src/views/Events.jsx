import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeroEvent from '../components/heroes/HeroEvent';
import SearchBarEvents from '../components/events/SearchBarEvents';
import ListEvents from '../components/events/ListEvents';

const Events = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SITE"});
        window.scrollTo(0,0);
    }, [dispatch])
    
    return(
        <div className="events view">
            <HeroEvent />
            <section className="main-section section-event card">
            <SearchBarEvents />
            <ListEvents />
            </section>
        </div>
    )
}

export default Events