import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UserDashboard = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SIGNUP"})
    }, [dispatch])
    
    return(
        <div className="user-dashboard">
            <h1>Welcome user!</h1>
        </div>
    )
}

export default UserDashboard