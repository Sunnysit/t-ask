// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import Axios from 'axios';

const UserDashboard = () => {

    const dispatch = useDispatch();
    //console.log(localStorage.getItem('userData'));

    //const [response, setResponse] = useState('initialState')


    useEffect(() => {
        dispatch({type: "USER_SIGNUP"})

        // Axios.defaults.headers.common['x-access-token'] = localStorage.getItem('userData'); 
        // console.log(Axios.defaults.headers.common['x-access-token']);

        // Axios.get(`https://t-ask-api.herokuapp.com/api/user`)
        // .then(res => {
        //     console.log(JSON.stringify(res.data))
        //     setResponse(JSON.stringify(res.data))

        // })
        // .catch(error => {
        //     console.log(error);
        // })
   
    }, [dispatch])

    //console.log(response);
    
    return(
        <div className="user-dashboard">
            <h1>Welcome user!</h1>
        </div>
    )
}

export default UserDashboard