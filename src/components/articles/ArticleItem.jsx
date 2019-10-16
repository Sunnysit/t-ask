import React from 'react';

const ArticleItem = (props) => {

    const article = props.article;
    console.log(article);

    return (
        <li className="article-list-item">
            <article className="article">
                <h2>
                    <a href={article.link}>{article.title}</a>
                </h2>
                <p>{article.author}</p>
                <p>{article.date}</p>
                <p>{article.readingTime}</p>
                {article.imgURL
                    ? (<img
                        className="article-thumbnail"
                        src={article.imgURL}
                        alt="article thumbnail"/>)
                    : (
                        <p></p>
                    )}
                <p>{article.description}</p>
            </article>
        </li>
    );
}

export default ArticleItem;