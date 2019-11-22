import React from 'react';
import {Link} from 'react-router-dom';
import LogIn from '../user/LogIn';
import ClickOutside from './ClickOutside';

const Header = () => {

    return (
        <header className="header">
            <section className="header-section">
                <div className="logo-container">
                    <button className="home-link">
                        <Link to="/">
                            <img
                                className="logo-desktop"
                                src="./assets/icons/logo-desktop.svg"
                                alt="task-logo"/>
                            <img
                                className="logo-mobile"
                                src="./assets/icons/logo-mobile.svg"
                                alt="task-logo"/>
                        </Link>
                    </button>
                </div>
                <div className="mobile">
                    <p className="nav-profile">
                        {!localStorage.getItem('userData')
                            ? (<LogIn/>)
                            : (
                                <Link to="/profile"><img
                                    src="./assets/icons/profile-icon.png"
                                    alt="profile icon"
                                    className="profile-icon"/></Link>
                            )}
                    </p>
                    <ClickOutside/>
                    
                </div>
                <div className="desktop">
                    <nav className="header-navigation">
                        <ul className="navigation">
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
                            <li className="navigation-item">
                                {!localStorage.getItem('userData')
                                    ? (<LogIn/>)
                                    : (
                                        <Link to="/profile"><img
                                            src="./assets/icons/profile-icon.png"
                                            alt="profile icon"
                                            className="profile-icon"/></Link>
                                    )}
                            </li>
                        </ul>
                    </nav>
                </div>

            </section>
        </header>
    );
}

export default Header;