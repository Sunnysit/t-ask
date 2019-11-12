import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Axios from 'axios';
import { TaskAxios } from '../../../library/TaskAxios';
const { encrypt } = require('../../../openPGP.js')


const Instructions = () => {

    let axiosLibrary = new TaskAxios();
    let dispatch = useDispatch();

    useEffect(() => {
        
        axiosLibrary.registerLang()
    }, [axiosLibrary])

    const languages = useSelector(state => state.languages.languages);
    //console.log(languages);

    const initialForm = {
        name: '',
        email:'',
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

    const [form, setForm] = useState(initialForm);

    const [errors, setErrors] = useState(initialErrors);

    let [newsletter, setNewsletter] = useState(false);

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

        if(!submitName && submitName.length < 1) {
            wrong.errorName = 'Please enter a valid name';
            formValidates = false;
        }
        if(!submitEmail || !submitEmail.includes('@')) {
            wrong.errorEmail = 'Please enter a valid email address';
            formValidates = false;
        }
        if(!submitPassword && submitPassword.length < 8) {
            wrong.errorPassword = 'Please enter a password at least 8 characters long';
            formValidates = false;
        }

        if(!submitConfirmPass || submitPassword !== submitConfirmPass) {
            wrong.errorConfirmPassword = "The passwords don't match";
            formValidates = false;
        }

        if(formValidates){
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
            errorLangs: ''
        }

        let submitLangs = langs.trim();

        let formValidates = true;

        if(!submitLangs && submitLangs.length > 3) {
            wrong.errorLangs = 'Please choose only 3 languages';
            formValidates = false;
        }

        const messageEncrypted = JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            languages: form.langs
        })
        console.log(messageEncrypted);

        if(formValidates){

            encrypt(messageEncrypted)
            .then(encryptedMessage => {
                Axios.post(`https://t-ask-api.herokuapp.com/api/user/signup`, {message: encryptedMessage})
                .then(res => {
                    console.log(res);

                    localStorage.setItem('userData', res.data.token);
                })
            })
        }
    }

    return (
        <div className="register-instructions">
            <form action="" onSubmit={handleSignUp}>
                <div className={!enable ? "step1-instructions" : " disable step1-instructions"}>
                    <h2>Enter your information</h2>
                    
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" id="Name" onChange={(e) => {setForm({...form, name: e.target.value})}} required/>
                    <div className="error-message">{errors.errorName}</div>
                    
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email" onChange={(e) => {setForm({...form, email: e.target.value})}} required/>
                    <div className="error-message">{errors.errorEmail}</div>
                    
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" onChange={(e) => {setForm({...form, password: e.target.value})}} required/>
                    <div className="error-message">{errors.errorPassword}</div>
                    
                    <label htmlFor="Password">Confirm password</label>
                    <input type="password" name="Password" id="Password" onChange={(e) => {setForm({...form, confirmPass:e.target.value})}} required/>
                    <div className="error-message">{errors.errorConfirmPassword}</div>

                    <div className="btn-next">
                        <div className="btn" onClick={handleRegistrationStep}>Next step</div>
                    </div>
                </div>
                <div className={enable ? "step2-instructions" : " disable step2-instructions"}>
                    <h2>Choose your interests</h2>

                    <div className="interest-languages">
                        <h3>Languages</h3>

                        <div className="error-message">{errors.errorLangs}</div>
                        <div className="languages-options">
                            {languages.map(language => <label key={language.languageId} htmlFor="language-option"><input type="checkbox" value={language.languageId} name="language-option" onChange={(e) => {setForm({...form, langs: [...form.langs, e.target.value]})}}/>{language.languageName}</label>)}
                        </div>
                    </div>
                    
                    <div className="interest-location">
                        <h3>Location</h3>
                        <input type="checkbox" name="location" value="USA"/> USA
                        <input type="checkbox" name="location" value="Canada"/> Canada
                    </div>
                    
                    <div className="interest-updates">
                        <h3>Updates</h3>
                        <p>I want to receive notifications by email</p>
                        <div className="toggle-switch">
                            <p>Yes</p>
                            <div className="toggle-container"  onClick={handleSwitch}>
                            <div className={!newsletter ? 'yes toggle-ball' : 'no toggle-ball'}>
                            </div>
                            </div>
                            <p>No</p>
                        </div>
                    </div>
                    
                    <div className="interest-content">
                        <h3>Content about</h3>
                        <input type="checkbox" name="articles" value="articles"/> Articles
                        <input type="checkbox" name="events" value="events"/> Events
                    </div>
                    
                    <div className="actions">
                        <p onClick={handleBack} className="secondary-link">Go back</p>
                        <button className="btn">Complete</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default Instructions