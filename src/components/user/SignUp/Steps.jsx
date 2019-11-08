import React from 'react';
import { useSelector} from 'react-redux';

const Steps = () => {

    const enable = useSelector(state => state.user.registration);

    return(
        <div className="register-steps">
            <div className="explanation">Create an account to have a personalized dashboard about your favorite languages and job categories even faster.</div>
            <div className={!enable ? "step1" : "step1 disable"}>
                <p className="number-step">1</p>
                <h2>Enter your information</h2>
                <p>Enter your name, username, email, and password. Password must be at least 8 characters long.</p>
            </div>
            <div className={enable ? "step2" : "step2 disable"}>
                <p className="number-step">2</p>
                <h2>Choose your interests</h2>
                <p>Skip and conclude your registration</p>
                <p>Choose up to 3 favorite languages to have as default on your dashboard and follow their ranking.
Choose your location of interest.</p>
            </div>
        </div>
    )
}

export default Steps