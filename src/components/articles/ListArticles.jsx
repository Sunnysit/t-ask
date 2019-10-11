import React from 'react';
import {useSelector} from 'react-redux';
import ArticleItem from './ArticleItem';

const ListArticles = () => {

    const articlesData = useSelector(state => state.articles.articlesResult);


    return ( 
        <ul className="article-list">
            {
                articlesData.map((article,index)=>{
                    return <ArticleItem key={index} article={article} />
                })
            }
        </ul>
     );
}
 
export default ListArticles;