/* eslint-disable no-lone-blocks */
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const BurgerMenu = () => {

    const toggleBurger = useSelector(state => state.languages.burgerMenu);

    const nameRef = useRef(null);
    const dispatch = useDispatch();

    const handleBurgerMenu = (e) => {
            console.log(nameRef.current);
            dispatch({type: "BURGER"});
        
    }

    const handleCloseBurgerMenu = (e) => {
        //console.log(nameRef.current);
        dispatch({type: "CLOSE_BURGER"});
    
}


    return (
        <div className="burger-menu-container">
            <button className="burger-icon" onClick={ handleBurgerMenu }>
                {!toggleBurger ? (
                    <FontAwesomeIcon icon={['fas', 'times']} size="2x"/>
                ) : (
                    <FontAwesomeIcon icon={['fas', 'bars']} size="2x"/>
                )}
            </button>

                <ul className={!toggleBurger ? "burger-menu open" : "burger-menu"}>
                <li className="navigation-item" onClick={ handleCloseBurgerMenu }>
                    <Link to="/articles">Articles</Link>
                </li>
                <li className="navigation-item" onClick={ handleCloseBurgerMenu }>
                    <Link to="/events">Events</Link>
                </li>
                <li className="navigation-item" onClick={ handleCloseBurgerMenu }>
                    <Link to="/about">About Us</Link>
                </li>
                <li className="navigation-item" onClick={ handleCloseBurgerMenu }>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>            

        </div>

    )
};

export default BurgerMenu;
{/* import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'


export default props => {
    return (
        <Menu>
            <p className="navigation-item">
                <Link to="/articles">Articles</Link>
            </p>
            <p className="navigation-item">
                <Link to="/events">Events</Link>
            </p>
            < p className="navigation-item">
                <Link to="/about">About Us</Link>
            </p>
            <p className="navigation-item">
                <Link to="/contact">Contact</Link>
            </p>
        </Menu>
    )
}; */
}