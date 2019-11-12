import React ,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';


const SearchBarEvents = () => {

    const dispatch = useDispatch();

     //Local state for search bar
     const [searchText,setSearchText] = useState('');
     const [message,setMessage] = useState('');

    //Default get upcoming event in Vancouver
    useEffect(() =>{

        setMessage(`Looking for upcoming event related to Tech`);

        axios.get("https://cheerio-medium.herokuapp.com/upcoming-event?")
        .then(result =>{
            if(result.status === 200)
            {   
                let eventList = result.data;
                dispatch({type:"UPDATE_EVENT_LIST",payload:eventList});
                setMessage("");
            }
            else{
                setMessage(`Unable to get events`);
            }
        }).catch(error=>{
            setMessage(error);
        })
    },[dispatch]);



    const handleSearchSubmit = (e) =>{
        e.preventDefault();
        let queryText = searchText.trim().toLowerCase();
        if(queryText&&queryText.length>=1){
            setMessage(`Looking for upcoming event related to ${searchText}`);

            axios.get(`https://cheerio-medium.herokuapp.com/upcoming-event?text=${queryText}`)
            .then(result =>{
                if(result.status === 200 && result.data.length>0)
                {   
                    let eventList = result.data;
                    dispatch({type:"UPDATE_EVENT_LIST",payload:eventList})
                }
                else{
                    //Update event search result to reducer
                    dispatch({type: 'UPDATE_EVENT_LIST', payload: []});
                    setMessage(`Couldn't find any upcoming event related to ${searchText}`);
                  }
            })
        }
        else{
            setMessage('Please input valid search text.');
        }
     
    
    }

    return ( 
        <div className="event-search-container">
        <form className="event-search-form" onSubmit={handleSearchSubmit}  action="https://cheerio-medium.herokuapp.com/articles" method="POST">
            <input className="input-basic search-input-article" placeholder="Language name..." value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} type="text"/>
            <button className="btn-search" type="submit"><img src="./assets/icons/search-icon.png" alt="search icon"/></button>
        </form>
        <p className="search-message">{message}</p>
        {/* <button onClick={fetchArticle}>Fetch</button> */}
    </div>
     );
}
 
export default SearchBarEvents;