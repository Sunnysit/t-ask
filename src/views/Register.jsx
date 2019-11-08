import React from 'react';
import Steps from '../components/user/SignUp/Steps'
import Instructions from '../components/user/SignUp/Instructions'

const Register = () => {
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