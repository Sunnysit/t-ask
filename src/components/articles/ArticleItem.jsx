import React from 'react';

const ArticleItem = (props) => {
    
    const article = props.article;

    return ( 
    <li className="article-item">
        <article>
            <h4>{article.title}</h4>
            <p>{article.author}</p>
            <p>{article.date}</p>
        </article>
    </li>
     );
}
 
export default ArticleItem;