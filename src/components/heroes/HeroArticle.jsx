import React,{useState,useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../articles/CarouselItem';

const HeroArticle = () => {

    const [featureArticles,setFeatureArticles] = useState([]);

    useEffect(()=>{
        let info = [
            {
                author: "Indrek Lasn",
                date: "Oct 29",
                description: "A guide to becoming a web developer without a…",
                imgURL: "https://cdn-images-1.medium.com/fit/t/1600/480/0*uVnIdaSsAp5hChRq",
                link: "https://medium.com/better-programming/become-a-web-developer-in-180-days-without-cs-degree-e869395972e1?source=---------0-----------------------",
                readingTime: "8 min read",
                title: "Become a Web Developer in 180 Days (Without a CS Degree)"
            },
            {
                author: "SeattleDataGuy",
                date: "Nov 3",
                description: "And three other Python stories…",
                imgURL: "https://cdn-images-1.medium.com/fit/t/1600/480/1*AZLyYP_0Pc7TKK-zLGYOLg.jpeg",
                link: "https://medium.com/better-programming/an-error-in-a-python-script-may-have-invalidated-150-research-projects-64fe7cda558c?source=---------1-----------------------",
                readingTime: "5 min read",
                title: "An Error in a Python Script May Have Invalidated 150+ Research Projects"
            },
            {
                author: "Emmett Boudreau",
                date: "Oct 28",
                description: "Python 3.8 released a few weeks ago, and rather than jumping the gun on talking about the…",
                imgURL: "https://cdn-images-1.medium.com/fit/t/1600/480/1*CrK1VuTTMSg-zL9-z3ohQQ.png",
                link: "https://towardsdatascience.com/my-favorite-new-features-in-python-3-8-a95d7a0a31c9?source=---------2-----------------------",
                readingTime: "4 min read",
                title: "My Favorite New Features in Python 3.8"
            }
        ]

        setFeatureArticles(info);

    },[]);

    //Render carousel item
    const carouselItems = featureArticles.map((article,index)=>{

        return (
            <CarouselItem key={index} info={article}/>
        )

    });
    

    return(
        <div className="hero-article hero">
            <h2 className="page-title">Articles</h2>
            <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                autoPlay={true}
                className="carousel-section"
                // showArrows={false}
            >
                {carouselItems}
            </Carousel>
        </div>
    )
}

export default HeroArticle