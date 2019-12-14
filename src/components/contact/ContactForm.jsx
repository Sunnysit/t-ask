import React, {useState} from 'react'
import axios from 'axios';

const ContactForm = () => {

    const initialForm = {
        name: '',
        email: '',
        inquiry: 'General',
        message: ''
    }

    const initialError = {
        errorName: '',
        errorEmail: '',
        errorMessage: ''
    }

    const [form,
        setForm] = useState(initialForm);

    const [sent,
        setSent] = useState(false);

    const [enabled,
        setEnable] = useState('true');

    const [error,
        setError] = useState(initialError);

    const [dropDown,
        setDropDown] = useState(true)

    //FUNCTIONS

    const handleDropDown = (e) => {

        setDropDown(!dropDown);
    }

    const handleSubject = (e) => {
        let selectedInquiry = e.target.id;
        setDropDown(true);
        setForm({...form, inquiry:selectedInquiry});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(form);

        let {name, email, inquiry, message} = form;

        let errors = {
            errorName: '',
            errorEmail: '',
            errorMessage: ''
        }

        // console.log(name); console.log(email); console.log(inquiry);
        // console.log(message);

        let submitName = name.trim();
        let submitEmail = email.trim();
        let submitSubject = inquiry.trim();
        let submitMessage = message.trim();

        let formValidates = true;

        if (!submitName && submitName.length < 1) {
            errors.errorName = 'Please enter a valid name';
            formValidates = false;
        }

        if (!submitEmail || !submitEmail.includes('@')) {
            errors.errorEmail = 'Please enter a valid email address';
            formValidates = false;
        }

        if (!submitMessage && submitMessage.length < 1) {
            errors.errorMessage = 'Please enter your message here';
            formValidates = false;
        }

        if (formValidates) {
            const contactInfo = {
                submitName,
                submitEmail,
                submitSubject,
                submitMessage
            };
            console.log(contactInfo);

            axios
                .post('https://t-ask-api.herokuapp.com/api/v1/contact', contactInfo)
                .then((response) => {
                    console.log(response);

                    if (response.status === 200 && response.data.isSent === true) {
                        setForm({name: '', email: '', inquiry: 'general', message: ''});
                        setSent(true);
                        setEnable('true');
                    } else {
                        errors.errorMessage = 'Something went wrong, please try again later';
                        setEnable('');
                    }
                })
                .catch((error) => console.log(error))
        }

        setError(errors);

    }
    return (
        <div className="contact-form">
            {!sent
                ? (
                    <form action="/contact-message" onSubmit={handleSubmit} className="form">

                        <div className="field">
                            <label htmlFor="name" className="label-required">Name</label>
                            <div className="error-message">{error.errorName}</div>

                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={(e) => {
                                setForm({
                                    ...form,
                                    name: e.target.value
                                })
                            }}/>
                        </div>

                        <div className="field">
                            <label htmlFor="email" className="label-required">Email</label>
                            <div className="error-message">{error.errorEmail}</div>

                            <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={(e) => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                })
                            }}/>
                        </div>

                        <div className="field">
                            <label htmlFor="inquiry" className="label-required">Inquiry</label>

                            <div className="select-subject">
                                <div onClick={handleDropDown} className="drop-down-menu">{form.inquiry}
                                    <span className="drop-down-icon">&#9662;</span>
                                </div>

                                {!dropDown
                                    ? (

                                        <div className="drop-down active">
                                            <ul className="inquiries">
                                                <li
                                                    id="General"
                                                    onClick={handleSubject}
                                                    className={form.inquiry === "General"
                                                    ? 'selected'
                                                    : null}>General
                                                    <span>&#10004;</span></li>

                                                <li id="Content" onClick={handleSubject}
                                                className={form.inquiry === "Content"
                                                    ? 'selected'
                                                    : null}>Content
                                                    <span>&#10004;</span></li>

                                                <li id="Customer service" onClick={handleSubject}
                                                className={form.inquiry === "Customer service"
                                                    ? 'selected'
                                                    : null}>Customer Service
                                                <span>&#10004;</span>
                                                </li>

                                                <li id="Other" onClick={handleSubject}
                                                className={form.inquiry === "Other"
                                                    ? 'selected'
                                                    : null}>Other
                                                <span>&#10004;</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                    : (
                                        <div className="drop-down"></div>
                                    )}
                            </div>

                        </div>

                        <div className="field">
                            <label htmlFor="message" className="label-required">Message</label>
                            <div className="error-message">{error.errorMessage}</div>

                            <textarea
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                onChange={(e) => {
                                setForm({
                                    ...form,
                                    message: e.target.value
                                })
                            }}></textarea>
                        </div>

                        <button className="btn" disabled={!enabled}>Send</button>
                    </form>
                )
                : (
                    <div className="message">
                        <h2>Thank you for your message!</h2>
                        <p>Our team will contact you shortly</p>
                    </div>
                )}

        </div>
    );
}

export default ContactForm;