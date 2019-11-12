import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HeroEvent from '../components/heroes/HeroEvent';
import SearchBarEvents from '../components/events/SearchBarEvents';
import ListEvents from '../components/events/ListEvents';

const Events = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SITE"})
    }, [dispatch])
    
    return(
        <div className="events view">
            <HeroEvent />
            <SearchBarEvents />
            <ListEvents />
        </div>
    )
}

export default Events