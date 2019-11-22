import React, {useState} from 'react';
import Popup from 'reactjs-popup';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import Axios from 'axios';

const LogIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const initialForm = {
        email: '',
        password: ''
    }

    const initialError = {
        emailError: '',
        submitError: ''
    }

    const [logInForm,
        setLogInForm] = useState(initialForm);
    const [errorForm,
        setErrorForm] = useState(initialError);

    const handleLogIn = (e) => {
        e.preventDefault();

        let {email, password} = logInForm;

        let errorMessage = {
            emailError: '',
            submitError: ''
        }

        let submitEmail = email.trim();
        let submitPassword = password.trim();

        let formValidates = true;

        if (!submitEmail.includes('@')) {
            errorMessage.emailError = 'Please enter a valid email address';
            formValidates = false;
        }

        const submitLogIn = {
            email: submitEmail,
            password: submitPassword
        };

        if (formValidates) {

            Axios
                .post('https://t-ask-api.herokuapp.com/api/user/login', submitLogIn)
                .then(res => {
                    console.log(res);

                    if (res.status === 200) {
                        localStorage.setItem('userData', res.data.token);
                        history.push('/profile');
                        dispatch({type: "USER_LOGIN"});
                    }
                })
                .catch(error => {
                    console.log(error);
                    errorMessage.submitError = 'Incorrect email or password. Please try again.'
                })
        }

        setErrorForm(errorMessage);

    }
    return (

        <Popup
            trigger={< img src = "./assets/icons/profile-icon.png" alt = "profile icon" className = "profile-icon" />}
            modal>
            {close => (
                <div className="modal">
                    <button onClick={close} className="close popup-text">&times;</button>
                    {/* <a href="/#" onClick={close} className="close popup-text">&times;</a> */}
                    <div className="header-popup">Log in to have access to your personal dashboard</div>
                    <div className="content">
                        <form action="" onSubmit={handleLogIn}>
                            <div className="field">
                                <label htmlFor="Email">Email</label>
                                <div className="error-message">{errorForm.emailError}</div>
                                <input
                                    type="email"
                                    name="Email"
                                    id="Email"
                                    onChange={e => {
                                    setLogInForm({
                                        ...logInForm,
                                        email: e.target.value
                                    })
                                }}/>
                            </div>

                            <div className="field">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    name="Password"
                                    id="Password"
                                    onChange={e => {
                                    setLogInForm({
                                        ...logInForm,
                                        password: e.target.value
                                    })
                                }}/>
                            </div>
                            <div className="login-action">
                                <button className="btn btn-login">Log in</button>
                                <a href="/#" className="popup-text">Forgot my password</a>
                            </div>

                        </form>

                        <p className="error-message">{errorForm.submitError}</p>

                    </div>

                    <div className="footer-popup">
                        Not a member?
                        <Link to="register" className="popup-text btn-register" onClick={close}>
                            Sign up here!</Link>
                    </div>

                </div>
            )}
        </Popup>
    )

}

export default LogIn