import React from 'react';
import HeroEvent from '../components/heroes/HeroEvent';
import SearchBarEvents from '../components/events/SearchBarEvents'

const Events = () => {
    return(
        <div className="events view">
            <HeroEvent />
            <SearchBarEvents />
        </div>
    )
}

export default Events