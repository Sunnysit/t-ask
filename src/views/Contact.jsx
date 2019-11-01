import React from 'react';
import HeroContact from '../components/heroes/HeroContact';
import ContactForm from '../components/contact/ContactForm';
import RandomQuote from '../components/contact/RandomQuote';

const Contact = () => {
    return (
        <div className="contact view">
            <HeroContact/>
            <div className="contact-body">
                <RandomQuote/>
                <ContactForm/>
            </div>

        </div>
    )
}

export default Contact