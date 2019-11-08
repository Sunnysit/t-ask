import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import Steps from '../components/user/SignUp/Steps'
import Instructions from '../components/user/SignUp/Instructions'

const Register = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SIGNUP"})
    }, [dispatch])

    return(
        <div className="register">
            <h1>Join Task</h1>
            <div className="registration">
                <Steps/>
                <Instructions/>
            </div>
            

        </div>
    )
}

export default Register