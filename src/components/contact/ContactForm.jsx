import React, { useState } from 'react'

const ContactForm = () => {
     //only when we cross the state between components, we use redux
        //
        //create local state
        //create function for submit, prevent default. 
            //create validate trim and make a condition to check if something is in the input
            //update component
            //error message, display at the end of the form
            //successful message, delete form if successful
            //use terniary syntax
    
    const formState = {
        name:'',
        email:'',
        message:'',
    }
    const [ form, setForm ] = useState(formState);

    const whenSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    return (
        <div className="">
            <h1>ContactForm Component</h1>
            <form action="/contact-message" onSubmit={ whenSubmit }>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={(e) => {setForm({...form, name: e.target.value})}}/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={(e) => {setForm({...form, email: e.target.value})}}/>
                <label htmlFor="inquiry">Inquiry</label>
                <select name="" id="inquiry">
                    <option value="general">General</option>
                    <option value="content">Content</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={(e) => {setForm({...form, message: e.target.value})}}></textarea>
                <button>Send</button>
            </form>
        </div>
     );
}
 
export default ContactForm;