import React, { useState } from 'react'

const ContactForm = () => {
     //only when we cross the state between components, we use redux
        //
        //create local state DONE
        //create function for submit, prevent default DONE
            //create validate trim and make a condition to check if something is in the input DONE
            //update component DONE
            //error message, display at the end of the form
            //successful message, delete form if successful
            //use terniary syntax
    
    const formState = {
        name:'',
        email:'',
        inquiry:'general',
        message:'',
    }

    const errorState = {
        errorName: '',
        errorEmail: '',
        errorMessage: ''
    }

    const [ form, setForm ] = useState(formState);
    
    //const [ sentState, setSentState ] = useState(false);

    const [ error, setErrorState ] = useState(errorState);

    //FUNCTIONS
    

    const whenSubmit = (e) => {
        e.preventDefault();
        //console.log(form);

        let {name, email, inquiry, message} = form;

        let errors = {
            errorName : '',
            errorEmail : '',
            errorMessage : ''
        }

        // console.log(name);
        // console.log(email);
        // console.log(inquiry);
        // console.log(message);

        let submitName = name.trim();
        let submitEmail = email.trim();
        let submitSubject = inquiry.trim();
        let submitMessage = message.trim();

        let formValidates = true;

        if(!submitName && submitName.length < 1){
            errors.errorName = 'Please enter a valid name';
            formValidates = false;
        }

        if(!submitEmail || !submitEmail.includes('@')){
            errors.errorEmail = 'Please enter a valid email address';
            formValidates = false;
        }

        if(!submitMessage && submitMessage.length < 1){
            errors.errorMessage = 'Please enter your message here';
            formValidates = false;
        }

        setErrorState(errors);


        if(formValidates){
            const contactInfo = {submitName, submitEmail, submitSubject, submitMessage};
            console.log(contactInfo);

        }

    }
    return (
        <div className="">
            <h1>ContactForm Component</h1>
            <form action="/contact-message" onSubmit={ whenSubmit }>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={(e) => {setForm({...form, name: e.target.value})}}/>
                <div className="errorMessage">{ error.errorName }</div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={(e) => {setForm({...form, email: e.target.value})}}/>
                <div className="errorMessage">{ error.errorEmail }</div>
                <label htmlFor="inquiry">Inquiry</label>
                <select name="" id="inquiry" onChange={(e) => {setForm({...form, inquiry: e.target.value})}}>
                    <option value="general">General</option>
                    <option value="content">Content</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={(e) => {setForm({...form, message: e.target.value})}}></textarea>
                <div className="errorMessage">{ error.errorMessage }</div>
                <button>Send</button>
            </form>
        </div>
     );
}
 
export default ContactForm;