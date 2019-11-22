import React from 'react';
import {useSelector} from 'react-redux';
import EventItem from './EventItem';

const ListEvents = () => {

    //Get Event list from reducer
    const eventList = useSelector(state => state.events.eventList);

    const renderList = eventList.map((event,index)=>{

        return <EventItem key={index} event={event} order={index+1} />
   
    });

    return ( 
        <ul className="event-list">
            {renderList}
        </ul>
     );
}
 
export default ListEvents;