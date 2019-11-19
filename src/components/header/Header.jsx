import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

import LogIn from '../user/LogIn'

const Header = () => {

    const userLogged = useSelector(state => state.user.userLogged);


    return (
        <header className="header">
            <section className="header-section">
            <div className="logo-container">
                <button className="home-link">
                <Link to="/">
                <img className="logo-desktop" src="./assets/icons/logo-desktop.svg" alt="task-logo"/>
                <img className="logo-mobile" src="./assets/icons/logo-mobile.svg" alt="task-logo"/>
                </Link>
                </button>
            </div>
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
                        {!localStorage.getItem('userData') ? (
                            <LogIn/>
                        ) : (
                            <Link to="/profile"><img src="./assets/icons/profile-icon.png" alt="profile icon" className="profile-icon"/></Link>
                        )}
                    </li>
                </ul>
            </nav>
            </section>
        </header>
    );
}

export default Header;