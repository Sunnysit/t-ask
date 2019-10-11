import React from 'react'

const ContactForm = () => {
    return ( 
        //only when we cross the state between components, we use redux
        //




        //create local state
        //create function for submit, prevent default. 
            //create validate trim and make a condition to check if something is in the input
            //update component
            //error message, display at the end of the form
            //successful message, delete form if successful
            //use terniary syntax

        <div className="">
            <h1>ContactForm Component</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="email">Email</label>
                <input type="text"/>
                <label htmlFor="inquiry">Inquiry</label>
                <select name="" id="inquiry">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </form>
        </div>
     );
}
 
export default ContactForm;