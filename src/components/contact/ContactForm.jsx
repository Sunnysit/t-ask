import React from 'react'

const ContactForm = () => {
    return ( 
        <div className="">
            <h1>ContactForm Component</h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="email">Email</label>
                <input type="text"/>
                <label htmlFor="subject">Subject</label>
                <input type="text" name="subject" id="subject"/>
                <label htmlFor="body">Body</label>
                <textarea name="body" id="body" cols="30" rows="10"></textarea>
            </form>
        </div>
     );
}
 
export default ContactForm;