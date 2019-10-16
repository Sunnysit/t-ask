import React from 'react';
import HeroContact from '../components/heroes/HeroContact';
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
    return(
        <div className="contact view">
            <HeroContact />
            <ContactForm />
        </div>
    )
}

export default Contact