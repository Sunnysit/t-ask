import React ,{useEffect,useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../events/CarouselItem';
import {useSelector} from 'react-redux';

const HeroEvent = () => {

    const [featureEvents,setFeatureEvents] = useState([]);

    //Get Event list from reducer
    const eventList = useSelector(state => state.events.eventList);

    useEffect(()=>{
        let info = [];
     
            for(let i=1;i<4;i++)
            {
                info.push(eventList[eventList.length-i]);
            }
    
            setFeatureEvents(info);
        
    
    },[eventList])


    //Render carousel item
    const carouselItems = featureEvents.map((event,index)=>{

        return (
            <CarouselItem key={index} info={event} order={index+3}/>
        )

    });
    

    return(
        <div className="hero-event hero">
        <h2 className="page-title">Events</h2>
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            className="carousel-section"
            autoPlay={true}
            // showArrows={false}
        >
            {carouselItems}
        </Carousel>
    </div>
    )
}

export default HeroEvent