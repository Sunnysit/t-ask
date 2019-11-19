// import React, { useEffect, useState } from 'react';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Settings from '../components/user/DashBoard/Settings';
import Top3Jobs from '../components/user/DashBoard/Top3Jobs';
import LanguagesSection from '../components/user/DashBoard/LanguagesSection';
import Axios from 'axios';
//import Axios from 'axios';

const UserDashboard = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.userInfo);
    //const [response, setResponse] = useState('initialState')
    useEffect(() => {
        dispatch({type: "USER_SIGNUP"});
        Axios.defaults.headers.common['x-access-token'] = localStorage.getItem('userData');

        Axios
            .get('https://t-ask-api.herokuapp.com/api/user')
            .then(res => {
                console.log(res.data);
                dispatch({type: "USER_INFO", payload: res.data})
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    console.log(user.name);

    return (
        <div className="user-profile">
            <h1>Welcome {user.name}!</h1>
            <div className="user-profile-body">
                <Settings/>
                <div className="user-profile-content">
                    <LanguagesSection/>
                    <Top3Jobs/>
                </div>
            </div>

        </div>
    )
}

export default UserDashboard;