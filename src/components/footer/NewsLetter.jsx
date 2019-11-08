import React, {useState} from 'react';
import {useSelector} from 'react-redux';


const NewsLetter = () => {

    const newsletter = useSelector(state => state.user.signUp);

    const [email,
        setEmail] = useState("");
    const [msg,
        setMsg] = useState("");

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let inputEmail = email.trim();
        console.log(inputEmail)
        if (inputEmail && inputEmail.length >= 1) {
            setMsg("");
        } else {
            setMsg('Please input valid email.');
        }

    }

    return (
        <section className={newsletter ? "visible newsletter-section" : "newsletter-section"}>
            <div className="newsletter-container">
                <p className="newsletter-description">Subscribe to our newsletter to receive the latest news</p>
                <form
                    onSubmit={handleOnSubmit}
                    action="#"
                    method="POST"
                    className="subscribe-form">
                    <input
                        placeholder="email@task.com"
                        type="email"
                        name="subscribe-email"
                        id="subscribe-email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    <p className="subscribe-message">{msg}</p>
                    <button className="btn subscribe-btn" type="submit">Subscribe</button>
                </form>

            </div>
        </section>
    );
}

export default NewsLetter;