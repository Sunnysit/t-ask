// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Settings from '../components/user/DashBoard/Settings';
import Top3Jobs from '../components/user/DashBoard/Top3Jobs';
import Top3Languages from '../components/user/DashBoard/Top3Languages';
//import Axios from 'axios';
//import Axios from 'axios';

const UserDashboard = () => {

    const dispatch = useDispatch();
    // console.log(localStorage.getItem('userData')); const [response, setResponse] =
    // useState('initialState') 
    useEffect(() => {     
        dispatch({type:"USER_SIGNUP"});

    //     Axios.defaults.headers.common['x-access-token'] = localStorage.getItem('userData');


    //     Axios.get('https://t-ask-api.herokuapp.com/api/user')
    //         .then(res=> {

    //             console.log(res.data);
    //             dispatch({type:"USER_INFO", payload: JSON.stringify(res.data)})
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    }, [dispatch]) 

    return (
        <div className="user-profile">
            <h1>Welcome user!</h1>
            <div className="user-profile-body">
                <Settings/>
                <div className="user-profile-content">
                    <Top3Jobs/>
                    <Top3Languages/>
                </div>
            </div>

        </div>
    )
}

export default UserDashboard;