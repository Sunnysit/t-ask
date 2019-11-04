import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroArticle = () => {


    return(
        <div className="hero-article hero">
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div>
                    <img src="https://cdn-images-1.medium.com/fit/t/1600/480/0*qASU92GfMj2HCTMg.jpg" alt="java"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*E8dtcW7fEoJc7qw20_rTKg.jpeg" alt="python"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn-images-1.medium.com/fit/t/1600/480/0*Ki5tlWeeJf2BR0sG" alt="javascript"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default HeroArticle