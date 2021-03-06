import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import HeroArticle from '../components/heroes/HeroArticle';
import SearchBarArticles from '../components/articles/SearchBarArticles';
import ListArticles from '../components/articles/ListArticles';

const Articles = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SITE"});
        window.scrollTo(0,0);
    }, [dispatch])
    
    return(
        <div className="articles view">
            <HeroArticle />
            <section className="main-section section-article card">
            <SearchBarArticles />
            <ListArticles />
            </section>
        </div>
    )
}

export default Articles