import React from 'react';
import {NavLink} from 'react-router-dom';
import LogIn from '../user/LogIn';
import ClickOutside from './ClickOutside';

const Header = () => {

    return (
        <header className="header">
            <section className="header-section">
                <div className="logo-container">
                    <button className="home-link">
                        <NavLink to="/" activeClassName="selected">
                            <img
                                className="logo-desktop"
                                src="./assets/icons/logo-desktop.svg"
                                alt="task-logo"/>
                            <img
                                className="logo-mobile"
                                src="./assets/icons/logo-mobile.svg"
                                alt="task-logo"/>
                        </NavLink>
                    </button>
                </div>
                <div className="mobile">
                    <p className="nav-profile">
                        {!localStorage.getItem('userData')
                            ? (<LogIn/>)
                            : (
                                <NavLink to="/profile" activeClassName="selected"><img
                                    src="./assets/icons/profile-icon.png"
                                    alt="profile icon"
                                    className="profile-icon"/></NavLink>
                            )}
                    </p>
                    <ClickOutside/>
                    
                </div>
                <div className="desktop">
                    <nav className="header-navigation">
                        <ul className="navigation">
                            <li className="navigation-item">
                                <NavLink to="/articles" activeClassName="selected">Articles</NavLink>
                            </li>
                            <li className="navigation-item">
                                <NavLink to="/events" activeClassName="selected">Events</NavLink>
                            </li>
                            <li className="navigation-item">
                                <NavLink to="/about" activeClassName="selected">About Us</NavLink>
                            </li>
                            <li className="navigation-item">
                                <NavLink to="/contact" activeClassName="selected">Contact</NavLink>
                            </li>
                            <li className="navigation-item">
                                {!localStorage.getItem('userData')
                                    ? (<LogIn/>)
                                    : (
                                        <NavLink to="/profile" activeClassName="selected"><img
                                            src="./assets/icons/profile-icon.png"
                                            alt="profile icon"
                                            className="profile-icon"/></NavLink>
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