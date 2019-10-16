import React from 'react';
import HeroArticle from '../components/heroes/HeroArticle';
import SearchBarArticles from '../components/articles/SearchBarArticles';
import ListArticles from '../components/articles/ListArticles';

const Articles = () => {
    return(
        <div className="articles view">
            <HeroArticle />
            <section className="main-section section-article">
            <SearchBarArticles />
            <ListArticles />
            </section>
        </div>
    )
}

export default Articles