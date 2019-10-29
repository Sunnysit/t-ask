import React from 'react';
import NewsLetter from './NewsLetter';


const Footer = () => {
    return ( 
    <footer className="footer">
        <NewsLetter />
        <nav className="footer-navigation">
            <ul className="navigation">
                <li className="navigation-item"><a href="https://www.linkedin.com/" className="footer-link">LinkedIn</a></li>
                <li className="navigation-item"><a href="https://www.facebook.com/" className="footer-link">Facebook</a></li>
                <li className="navigation-item"><a href="https://twitter.com/" className="footer-link">Twitter</a></li>
                <li className="navigation-item"><a href="#" className="footer-link">Terms and conditions</a></li>
                <li className="navigation-item"><a href="#" className="footer-link">Supporters</a></li>
            </ul>
        </nav>
        <div className="copyright-container">
            <p className="copyright-text">
            Task© 2019. All rights reserved.
            </p>
        </div>
    </footer> );
}
 
export default Footer;