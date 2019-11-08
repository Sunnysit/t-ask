import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';


const SearchBarArticles = () => {

    const dispatch = useDispatch();

    //Local state for search bar
    const [searchText,setSearchText] = useState('');
    const [message,setMessage] = useState('');

    const articleResult = useSelector(state => state.articles.articlesResult);


    //Init component with the tech article
    useEffect(()=>{

      //No result yet. Start Fetching
      if(articleResult.length===0)
      { 
        setMessage(`Loading Article about Technology...`);

        axios.post('https://cheerio-medium.herokuapp.com/articles',{query:"tech"})
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
   
    },[]);

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

    return ( 
    <div className="article-search-container">
        <form className="article-search-form" onSubmit={handleSearchSubmit}  action="https://cheerio-medium.herokuapp.com/articles" method="POST">
            <input className="input-basic search-input-article" placeholder="Language name..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} type="text"/>
            <button className="btn-search" type="submit"><img src="./assets/icons/search-icon.png" alt="search icon"/></button>
        </form>
        <p className="search-message">{message}</p>
        {/* <button onClick={fetchArticle}>Fetch</button> */}
    </div>
     );
}
 
export default SearchBarArticles;