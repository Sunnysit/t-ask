import React from 'react';
import HeroArticle from '../components/heroes/HeroArticle';
import SearchBarArticles from '../components/articles/SearchBarArticles';
import ListArticles from '../components/articles/ListArticles';

const Articles = () => {
    return(
        <div className="articles view">
            <HeroArticle />
            <SearchBarArticles />
            <ListArticles />
        </div>
    )
}

export default Articles