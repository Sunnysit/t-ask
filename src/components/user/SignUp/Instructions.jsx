import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {TaskAxios} from '../../../library/TaskAxios';
import {useHistory} from 'react-router-dom';

const Instructions = () => {

    let axiosLibrary = new TaskAxios();
    let dispatch = useDispatch();
    let history = useHistory();

    const languages = useSelector(state => state.languages.languages);
    //console.log(languages);

    const initialForm = {
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        langs: []
    }

    const initialErrors = {
        errorName: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: '',
        errorLanguages: ''
    }

    const enable = useSelector(state => state.user.registration);

    const [form,
        setForm] = useState(initialForm);

    const [errors,
        setErrors] = useState(initialErrors);

    let [newsletter,
        setNewsletter] = useState(false);

    useEffect(() => {

        axiosLibrary.registerLang();
    }, [])

    const handleRegistrationStep = () => {
        let {name, email, password, confirmPass} = form;

        let wrong = {
            errorName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirmPassword: '',
            errorLangs: ''
        }

        let submitName = name.trim();
        let submitEmail = email.trim();
        let submitPassword = password.trim();
        let submitConfirmPass = confirmPass.trim();

        let formValidates = true;

        if (!submitName && submitName.length < 1) {
            wrong.errorName = 'Please enter a valid name';
            formValidates = false;
        }
        if (!submitEmail || !submitEmail.includes('@')) {
            wrong.errorEmail = 'Please enter a valid email address';
            formValidates = false;
        }
        if (!submitPassword && submitPassword.length < 8) {
            wrong.errorPassword = 'Please enter a password at least 8 characters long';
            formValidates = false;
        }

        if (!submitConfirmPass || submitPassword !== submitConfirmPass) {
            wrong.errorConfirmPassword = "The passwords don't match";
            formValidates = false;
        }

        if (formValidates) {
            dispatch({type: "USER_REGISTRATION"})
        }

        setErrors(wrong);

    }

    const handleSwitch = () => {
        console.log(newsletter);
        setNewsletter(!newsletter);
    }

    const handleBack = () => {
        dispatch({type: "USER_REGISTRATION_BACK"});
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        let {langs} = form;

        let wrong = {
            errorName: '',
            errorEmail: '',
            errorPassword: '',
            errorConfirmPassword: '',
            errorLangs: ''
        }

        let submitLangs = langs;

        let formValidates = true;

        if (submitLangs.length === 0) {
            wrong.errorLangs = 'Please choose up to three languages';
            formValidates = false;
        }

        if (submitLangs.length > 3) {
            wrong.errorLangs = 'Please choose only 3 languages';
            formValidates = false;
        }

        const messageSent = {name: form.name, email: form.email, password: form.password, languages: form.langs};

        if (formValidates) {

            
                Axios
                    .post(`https://t-ask-api.herokuapp.com/api/user/signup`, messageSent)
                    .then(res => {
                        console.log(res);

                        if(res.status === 200){
                            localStorage.setItem('userData', res.data.token);
                            history.push('/profile');
                            dispatch({type:"USER_LOGIN"});
                        }


                    })
                    .catch(error => {
                        console.log(error);
                    })

        }

        setErrors(wrong);

    }

    const handleLanguageSelect = (e) => {
        let selectLanguageId = e.target.value;

        //console.log(selectLanguageId);

        if (form.langs.length === 0) {
            setForm({
                ...form,
                langs: [selectLanguageId]
            });
        } else if (form.langs.length > 0) {
            for (let i = 0; i < form.langs.length; i++) {
                if (selectLanguageId !== form.langs[i]) {
                    setForm({
                        ...form,
                        langs: [
                            ...form.langs,
                            selectLanguageId
                        ]
                    });
                } else if (selectLanguageId === form.langs[i]) {
                    let removeLanguage = form.langs;
                    removeLanguage.splice(i, 1);
                    console.log('this value is in the array!');
                    setForm({
                        ...form,
                        langs: removeLanguage
                    });
                }

            }
        }

        console.log(form);
    }

    return (
        <div className="register-instructions">
            <form action="" onSubmit={handleSignUp}>
                <div
                    className={!enable
                    ? "step1-instructions"
                    : " disable step1-instructions"}>
                    <h2 className="desktop">Enter your information</h2>

                    <div className="field">
                        <label htmlFor="Name" className="label-required">Name</label>
                        <div className="error-message">{errors.errorName}</div>
                        <input type="text" name="Name" id="Name" //value="Name"
                            onChange={(e) => {
                            setForm({
                                ...form,
                                name: e.target.value
                            })
                        }} required/>

                    </div>

                    <div className="field">
                        <label htmlFor="Email" className="label-required">Email</label>
                        <div className="error-message">{errors.errorEmail}</div>
                        <input type="email" name="Email" id="Email" //value="Email"
                            onChange={(e) => {
                            setForm({
                                ...form,
                                email: e.target.value
                            })
                        }} required/>
                    </div>

                    <div className="field">
                        <label htmlFor="Password" className="label-required">Password</label>
                        <div className="error-message">{errors.errorPassword}</div>
                        <input
                            type="password"
                            name="Password"
                            id="Password"
                            onChange={(e) => {
                            setForm({
                                ...form,
                                password: e.target.value
                            })
                        }}
                            required/>
                    </div>

                    <div className="field">
                        <label htmlFor="Password-confirm" className="label-required">Confirm password</label>
                        <div className="error-message">{errors.errorConfirmPassword}</div>
                        <input
                            type="password"
                            name="Password-confirm"
                            id="Password-confirm"
                            onChange={(e) => {
                            setForm({
                                ...form,
                                confirmPass: e.target.value
                            })
                        }}
                            required/>
                    </div>

                    <div className="actions">
                        <div className="btn" onClick={handleRegistrationStep}>Next step</div>
                    </div>
                </div>
                <div
                    className={enable
                    ? "step2-instructions"
                    : " disable step2-instructions"}>
                    <h2>Choose your interests</h2>

                    <div className="interest-languages field">
                        <h3 className="label-required">Languages</h3>

                        <div className="error-message">{errors.errorLangs}</div>
                        <div className="languages-options">
                            {languages.map(language => <label
                                key={language.languageId}
                                htmlFor="language-option"
                                className="label-checkmark"><input
                                type="checkbox"
                                value={language.languageId}
                                name="language-option"
                                onChange={handleLanguageSelect}/>
                                <span className="checkmark"></span>
                                {language.languageName}</label>)}
                        </div>
                    </div>

                    <div className="interest-location field">
                        <h3>Location</h3>
                        <label htmlFor="location-usa" className="label-checkmark">
                            <input type="checkbox" name="location-usa" value="USA"/>
                            <span className="checkmark"></span>
                            USA
                        </label>
                        
                        <label htmlFor="location-canada" className="label-checkmark">
                        <input type="checkbox" name="location-canada" value="Canada"/>
                        <span className="checkmark"></span>
                        Canada
                        </label>
                        
                    </div>

                    <div className="interest-updates field">
                        <h3>Updates</h3>
                        <p>I want to receive notifications by email</p>
                        <div className="toggle-switch">
                            <p>Yes</p>
                            <div className="toggle-container" onClick={handleSwitch}>
                                <div
                                    className={!newsletter
                                    ? 'yes toggle-ball'
                                    : 'no toggle-ball'}></div>
                            </div>
                            <p>No</p>
                        </div>
                    </div>

                    <div className="interest-content field">
                        <h3>Content about</h3>
                        <label htmlFor="articles" className="label-checkmark">
                        <input type="checkbox" name="articles" value="articles"/>
                            <span className="checkmark"></span>
                            Articles
                            </label>
                        <label htmlFor="events" className="label-checkmark">
                        <input type="checkbox" name="events" value="events"/>
                        <span className="checkmark"></span>
                        Events</label>
                    </div>

                    <div className="actions">
                        {/* <Link to="/profile"> */}
                            <button className="btn">Complete</button>
                        {/* </Link> */}
                        
                        <p onClick={handleBack} className="secondary-link">Go back</p>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Instructions