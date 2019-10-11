import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';


const SearchBarArticles = () => {

    const articlesData = useSelector(state => state.articles.articlesResult);
    const dispatch = useDispatch();

    useEffect(
        () => {
          console.log(articlesData);
        },
        [articlesData],
      );

    const fetchArticle = (e) =>{
        axios.get('https://cheerio-medium.herokuapp.com/test')
        .then(function (response) {

          dispatch({type: 'UPDATE_ARTICLES_RESULT', payload: response.data})

        });
    }

    return ( 
    <div className="">
        <h1>SearchBarArticles Component</h1>
        <button onClick={fetchArticle}>Fetch</button>
    </div>
     );
}
 
export default SearchBarArticles;