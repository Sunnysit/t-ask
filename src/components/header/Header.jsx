import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav className="header-navigation">
                <ul className="navigation">
                    <li className="navigation-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/articles">Articles</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/events">Events</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;