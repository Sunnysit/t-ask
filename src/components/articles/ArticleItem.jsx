import React from 'react';

const ArticleItem = (props) => {

    const article = props.article;
    // console.log(article);

    return (
        <li className="article-list-item">
            <article className="article">
                <h2 className="article-title">
                    <a target="blank" href={article.link}>{article.title}</a>
                </h2>
                <div className="article-body">
                    <div className="article-info-container">
                        <div className="article-info">
                            <p className="author">Author: <strong>{article.author}</strong></p>
                            <p>
                                <span className="date">{article.date}</span>
                                <span className="reading-time">{article.readingTime}</span>
                            </p>
                        </div>
                        <div className="action-container">
                            <div className="action-btn share-btn">
                                <img
                                    className="action-icon normal"
                                    src="./assets/icons/share-normal-icon.svg"
                                    alt="share button"/>
                                <img
                                    className="action-icon hover"
                                    src="./assets/icons/share-hover-icon.svg"
                                    alt="share button"/>
                                <img
                                    className="action-icon selected"
                                    src="./assets/icons/share-selected-icon.svg"
                                    alt="share button"/>
                            </div>
                            <div className="action-btn favorite-btn">
                                <img
                                    className="action-icon normal"
                                    src="./assets/icons/favorite-normal-icon.svg"
                                    alt="favorite button"/>
                                <img
                                    className="action-icon hover"
                                    src="./assets/icons/favorite-hover-icon.svg"
                                    alt="favorite button"/>
                                <img
                                    className="action-icon selected"
                                    src="./assets/icons/favorite-selected-icon.svg"
                                    alt="favorite button"/>
                            </div>
                        </div>
                    </div>
                    {article.imgURL
                        ? (
                            <a target="blank" href={article.link}><img
                                className="article-thumbnail"
                                src={article.imgURL}
                                alt="article thumbnail"/></a>
                        )
                        : (
                            <p></p>
                        )}
                    <p>{article.description}</p>
                </div>
                <div className="article-footer">
                    <p className="powered-by">Powered by:
                        <a target="blank" href="https://medium.com/" className="source-link"><img src="./assets/powered-by/medium.png" alt="Medium logo"/></a>
                    </p>
                    <a target="blank" href={article.link} className="btn-outline btn-read-more">Read more</a>
                </div>
            </article>
        </li>
    );
}

export default ArticleItem;