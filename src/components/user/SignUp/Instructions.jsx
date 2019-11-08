import React, {useEffect, useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Axios from 'axios'

const { encrypt } = require('../../../openPGP.js')


const Instructions = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        Axios
            .get('https://t-ask-api.herokuapp.com/api/comparison/languages')
            .then(result => {
                const languagesArray = result
                    .data
                    .map(language => {
                        return {languageName: language.name, languageId: language.id_language};
                    })
                dispatch({type: "SET_ALL_LANGUAGES", payload: languagesArray});
            })
    }, [dispatch])

    const languages = useSelector(state => state.languages.languages);
    //console.log(languages);

    const initialForm = {
        name: '',
        email:'',
        password: '',
        langs: []
    }

    const enable = useSelector(state => state.user.registration);

    const [form, setForm] = useState(initialForm);

    let [newsletter, setNewsletter] = useState(false);

    const handleRegistrationStep = () => {
        dispatch({type: "USER_REGISTRATION"})
    }

    const handleSwitch = () => {
        console.log(newsletter);
        setNewsletter(!newsletter);
    }

    const handleSignUp = (e) => {
        e.preventDefault();

        const messageEncrypted = JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            languages: form.langs
        })
        console.log(messageEncrypted);

        encrypt(messageEncrypted)
            .then(encryptedMessage => {
                Axios.post(`https://t-ask-api.herokuapp.com/api/user/signup`, {message: encryptedMessage})
                .then(res => {
                    console.log(res);

                    localStorage.setItem('userData', res.data.token);
                })
            })
    }

    return (
        <div className="register-instructions">
            <form action="" onSubmit={handleSignUp}>
                <div className={!enable ? "step1-instructions" : " disable step1-instructions"}>
                    <h2>Enter your information</h2>
                    <label htmlFor="Name">Name</label>
                    <input type="text" name="Name" id="Name" onChange={(e) => {setForm({...form, name: e.target.value})}}/>
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email" onChange={(e) => {setForm({...form, email: e.target.value})}}/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" onChange={(e) => {setForm({...form, password: e.target.value})}}/>
                    <label htmlFor="Password">Confirm password</label>
                    <input type="password" name="Password" id="Password"/>
                    <div className="btn" onClick={handleRegistrationStep}>Next step</div>
                </div>
                <div className={enable ? "step2-instructions" : " disable step2-instructions"}>
                    <h2>Choose your interests</h2>

                    <div className="interest-languages">
                        <h3>Languages</h3>
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
                    
                    <button className="btn">Complete</button>
                </div>
            </form>
        </div>
    )
}

export default Instructions