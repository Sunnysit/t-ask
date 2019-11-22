import React from 'react';
import { Link } from 'react-router-dom'

const SignUpBanner = () => {
    return (
        <div className="sign-up-banner">
            <p>Sign up now and have the information about your favorite languages personalized. </p>
            <Link to="/register" className="btn-banner"><button className="btn">Sign up</button></Link>
        </div>
    );
} 

export default SignUpBanner;