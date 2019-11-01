import React, {useState} from 'react'
import axios from 'axios';

const ContactForm = () => {

    const initialForm = {
        name: '',
        email: '',
        inquiry: 'general',
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

    const [enabled, setEnable] = useState('true');

    const [error,
        setError] = useState(initialError);

    //FUNCTIONS

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
                .post('http://localhost:8080/contact-message', contactInfo)
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
                        <label htmlFor="name">Name</label>
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
                        <div className="error-message">{error.errorName}</div>
                        <label htmlFor="email">Email</label>
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
                        <div className="error-message">{error.errorEmail}</div>
                        <label htmlFor="inquiry">Inquiry</label>
                        <select
                            name=""
                            id="inquiry"
                            onChange={(e) => {
                            setForm({
                                ...form,
                                inquiry: e.target.value
                            })
                        }}>
                            <option value="general">General</option>
                            <option value="content">Content</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="message">Message</label>
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
                        <div className="error-message">{error.errorMessage}</div>
                        <button disabled={ !enabled }>Send</button>
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