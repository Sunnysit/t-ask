import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Steps from '../components/user/SignUp/Steps'
import Instructions from '../components/user/SignUp/Instructions'

const Register = () => {

    const dispatch = useDispatch();

    const enable = useSelector(state => state.user.registration);

    useEffect(() => {
        dispatch({type: "USER_SIGNUP"});
        dispatch({type: "USER_REGISTRATION_BACK"})
    }, [dispatch])

    return(
        <div className="register">
            <h1 className="mobile-h1">Join Task
                {!enable ? (
                    <span className="step"> - Step 1</span>
                ) : (
                    <span className="step"> - Step 2</span>
                )}
                

            </h1>
            <div className="registration card">
                <Steps/>
                <Instructions/>
            </div>
            

        </div>
    )
}

export default Register