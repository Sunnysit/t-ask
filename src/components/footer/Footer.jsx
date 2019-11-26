import React from 'react';
import NewsLetter from './NewsLetter';


const Footer = () => {
    return ( 
    <footer className="footer">
        <NewsLetter />
        <nav className="footer-navigation">
            <p className="navigation-description">Proudly Powered by:</p>
            <ul className="navigation">
                <li className="navigation-item"><a rel="noopener noreferrer" target="_blank" href="https://www.linkup.com/" className="footer-link"><img src="./assets/company/linkup.png" alt="linkup logo"/></a></li>
                <li className="navigation-item"><a rel="noopener noreferrer" target="_blank" href="https://trends.google.com/" className="footer-link"><img src="./assets/company/googletrends.png" alt="google trends logo"/></a></li>
                <li className="navigation-item"><a rel="noopener noreferrer" target="_blank" href="https://github.com/" className="footer-link"><img src="./assets/company/github.png" alt="Github logo"/></a></li>
                <li className="navigation-item"><a rel="noopener noreferrer" target="_blank" href="https://medium.com/" className="footer-link"><img src="./assets/company/medium.png" alt="medium logo"/></a></li>
                <li className="navigation-item"><a rel="noopener noreferrer" target="_blank" href="https://www.meetup.com/" className="footer-link"><img src="./assets/company/meetup.png" alt="meetup logo"/></a></li>
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