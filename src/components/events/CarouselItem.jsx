import React from 'react';
import moment from 'moment';
import ActionBtns from '../common/ActionBtns';

const CarouselItem = (props) => {

    let event = props.info;
    const eventOrder = props.order;

    return (event
        ? (
            <div className="carousel-item">
                <a className="event-link-thumbnail" target="blank" href={event.link}>
                <div className="thumbnail-container">
                    <img
                        className="event-thumbnail"
                        src={`assets/events/event ${eventOrder}.jpeg`}
                        alt="feature article thumbnail"/>
                </div>
                </a>
                <div className="carousel-body">
                    <div className="event-time">
                        <p className="event-month">{moment(event.time).format('MMM')}</p>
                        <p className="event-date">{moment(event.time).format('D')}</p>
                        <p className="event-weekday">{moment(event.time).format('ddd')}</p>
                        <p className="event-detail-time">{event.local_time}</p>
                    </div>
                    <div className="event-info-container">
                        <h2 className="event-title">
                            <a target="blank" href={event.link}>{event.name}</a>
                        </h2>
                        <div className="event-info">
                            <div className="hosted-by">
                                <p className="group-name">Hosted by: {event.group.name}</p>
                            </div>

                        </div>
                        <div
                            className="event-description"
                            dangerouslySetInnerHTML={{
                            __html: event
                                .description
                                .substring(3, 100)
                        }}></div>
                    </div>
                    <ActionBtns/>
                </div>
                <div className="carousel-footer">
                    <div className="source-container">
                        <p className="powered-by">Powered by:
                            <a target="blank" href="https://meetup.com/" className="source-link"><img src="./assets/powered-by/meetup.png" alt="Meetup logo"/></a>
                        </p>
                    </div>
                    <div className="btn-container">
                        <a target="blank" href={event.link} className="btn-outline btn-read-more">Read more</a>
                    </div>

                </div>
            </div>
        )
        : (
            <p></p>
        ));
}

export default CarouselItem;