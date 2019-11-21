import React from 'react';
import {useSelector} from 'react-redux';
import ArticleItem from './ArticleItem';

const ListArticles = () => {

    const articlesData = useSelector(state => state.articles.articlesResult);


    return ( 
        <ul className="article-list">
            {
                articlesData.map((article,index)=>{
                    //Check the article has image or not
                    if(article.imgURL)
                    return <ArticleItem key={index} article={article} />
                    else
                    return false
                })
            }
        </ul>
     );
}
 
export default ListArticles;