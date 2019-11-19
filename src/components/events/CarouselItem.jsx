import React from 'react';

const CarouselItem = (props) => {

    let article = props.info;

    return (
        <div className="carousel-item">
            <img
                className="article-thumbnail"
                src={article.imgURL}
                alt="feature article thumbnail"/>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-info-container">
                <div className="article-info">
                    <p className="author">{article.author}</p>
                    <p>
                        <span className="date">{article.date}</span>
                        <span className="reading-time">{article.readingTime}</span>
                    </p>
                </div>

            </div>
            <p className="article-excerpt">{article.description}</p>
            <div className="carousel-footer">
                <div className="source-container">
                    <p className="powered-by">Powered by:
                        <a target="blank" href="https://medium.com/" className="source-link"><img src="./assets/powered-by/medium.png" alt="Medium logo"/></a>
                    </p>
                </div>
                <div className="btn-container">
                    <a target="blank" href={article.link} className="btn-outline btn-read-more">Read more</a>
                </div>

            </div>
        </div>
    );
}

export default CarouselItem;