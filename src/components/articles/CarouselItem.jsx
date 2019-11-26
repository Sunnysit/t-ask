import React from 'react';

const CarouselItem = (props) => {

    let article = props.info;

    return (
        <div className="carousel-item">
             <a className="article-link-thumbnail" target="blank" href={article.link}>
                <div className="thumbnail-container">
            <img
                className="article-thumbnail"
                src={article.imgURL}
                alt="feature article thumbnail"/>
                </div>
                </a>
            <h2 className="article-title">  <a target="blank" href={article.link}>{article.title}</a></h2>
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