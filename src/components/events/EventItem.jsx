import React from 'react';
import moment from 'moment';
import ActionBtns from '../common/ActionBtns';

const EventItem = (props) => {

    const eventInfo = props.event;
    const eventOrder = props.order;

    eventInfo.description.substring(3,100);
    

    return (
        <li className="event-list-item">
            <article className="event">
                <div className="event-header">
                    <div className="event-time">
                        <p className="event-month">{moment(eventInfo.time).format('MMM')}</p>
                        <p className="event-date">{moment(eventInfo.time).format('D')}</p>
                        <p className="event-weekday">{moment(eventInfo.time).format('ddd')}</p>
                        <p className="event-detail-time">{eventInfo.local_time}</p>
                        
                    </div>
                    <div className="event-header-right">
                    <h2 className="event-title">
                    <a target="blank" href={eventInfo.link}>{eventInfo.name}</a>
                    </h2>
                    <div className="event-info">
                        <div className="hosted-by">
                            <p>Hosted by:</p>
                            <p className="group-name">{eventInfo.group.name}</p>
                        </div>
                        <ActionBtns />
                    </div>
                    </div>
                </div>
                <div className="event-description" dangerouslySetInnerHTML={{ __html: eventInfo.description}}></div>
                <div className="event-thumbnail-container">
                    {/* default images from unsplash */}
                    <img src={`assets/events/event ${eventOrder}.jpeg`} alt="event-default-thumbnail" className="event-thumbnail"/>
                </div>
                <div className="event-footer">
                    <p className="powered-by">Powered by:
                        <a target="blank" href="https://meetup.com/" className="source-link"><img src="./assets/powered-by/meetup.png" alt="Meetup logo"/></a>
                    </p>
                    <a target="blank" href={eventInfo.link} className="btn-outline btn-read-more">Read more</a>
                </div>
            </article>
        </li>
    );
}

export default EventItem;