import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import HeroContact from '../components/heroes/HeroContact';
import ContactForm from '../components/contact/ContactForm';
import RandomQuote from '../components/contact/RandomQuote';

const Contact = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: "USER_SITE"})
    }, [dispatch])
    
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