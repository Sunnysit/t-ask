import React from 'react';
import moment from 'moment';

const EventItem = (props) => {

    const evenInfo = props.event;
    // console.log(evenInfo)

    return (
        <li className="event-list-item">
            <article className="event">
                <h2 className="event-title">
                <a target="blank" href={evenInfo.link}>{evenInfo.name}</a>
                </h2>
                <div className="event-info">
                    <div className="event-time">
                        {moment(evenInfo.time).format('ll')}
                    </div>
                    <div className="event-description">
                        {/* {evenInfo.description} */}
                    </div>
                </div>
            </article>
        </li>
    );
}

export default EventItem;