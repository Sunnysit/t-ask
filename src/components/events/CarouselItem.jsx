import React from 'react';

const CarouselItem = (props) => {

    let event = props.info;
    const eventOrder = props.order;

    if(event){
        console.log(event);
    }

    return (
        event?
        (
            <div className="carousel-item">
            <div className="thumbnail-container">
                <img
                    className="event-thumbnail"
                    src={`assets/events/event ${eventOrder}.jpeg`}
                    alt="feature article thumbnail"/>
            </div>
            <div className="carousel-body">
                
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
        ):(
            <p></p>
        )
    );
}

export default CarouselItem;