import React from 'react';
import ActionBtns from '../common/ActionBtns';

const ArticleItem = (props) => {

    const article = props.article;

    return (
        <li className="article-list-item">
            <article className="article">
                <div className="article-body">
                <h2 className="article-title">
                    <a target="blank" href={article.link}>{article.title}</a>
                </h2>
                    <div className="article-info-container">
                        <div className="article-info">
                            <p className="author">Author:
                                <strong>{article.author}</strong>
                            </p>
                            <p>
                                <span className="date">{article.date}</span>
                                <span className="reading-time">{article.readingTime}</span>
                            </p>
                        </div>
                        <ActionBtns/>
                    </div>
                    <a target="blank" href={article.link}>
                        <div className="thumbnail-container">
                            <img
                                className="article-thumbnail"
                                src={article.imgURL}
                                alt="article thumbnail"/>
                        </div>
                    </a>
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