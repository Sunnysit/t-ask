import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';


const SearchBarArticles = () => {

    const dispatch = useDispatch();

    //Local state for search bar
    const [searchText,setSearchText] = useState('');
    const [message,setMessage] = useState('');

    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        let queryText = searchText.trim().toLowerCase();
        if(queryText&&queryText.length>=1){
            setMessage(`Looking for article related to ${searchText}`);
            axios.post('https://cheerio-medium.herokuapp.com/articles',{query:queryText})
            .then(function (response) {

              if(response.status===200&&response.data.length>=1)
              {
                //Update article search result to reducer
                dispatch({type: 'UPDATE_ARTICLES_RESULT', payload: response.data});

                //Empty error message
                setMessage('');
              }
              else{
                //Update article search result to reducer
                dispatch({type: 'UPDATE_ARTICLES_RESULT', payload: []});
                setMessage(`Couldn't find any article related to ${searchText}`);
              }
            
    
            });
        }
        else{
            setMessage('Please input valid search text.');
        }
     
    
    }
    
    // const fetchArticle = (e) =>{
    //     axios.get('https://cheerio-medium.herokuapp.com/test')
    //     .then(function (response) {

    //       dispatch({type: 'UPDATE_ARTICLES_RESULT', payload: response.data})

    //     });
    // }

    return ( 
    <div className="article-search-container">
        <h1>Search article related to your programing language</h1>
        <form className="article-search-form" onSubmit={handleSearchSubmit}  action="https://cheerio-medium.herokuapp.com/articles" method="POST">
            <input value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} type="text"/>
            <button className="btn-search" type="submit">Search</button>
        </form>
        <p className="search-message">{message}</p>
        {/* <button onClick={fetchArticle}>Fetch</button> */}
    </div>
     );
}
 
export default SearchBarArticles;