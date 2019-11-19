import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../articles/CarouselItem';

const HeroEvent = () => {
    return(
        <div className="hero-article hero">
        <h2 className="page-title">Events</h2>
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            // showArrows={false}
        >
            {/* {carouselItems} */}
        </Carousel>
    </div>
    )
}

export default HeroEvent