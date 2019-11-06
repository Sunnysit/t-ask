import React from 'react'
import Popup from 'reactjs-popup'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom';

const LogIn = () => {

    const dispatch = useDispatch();

    const handleLogIn = () => {
        dispatch({type:"USER_LOGIN"})
    }
    return (

    <Popup trigger={<button className="btn">Log In</button>} modal>
    {close => (
        <div className="modal">
            <a href="/#" onClick={close} className="close popup-text">&times;</a>
            <div className="header-popup">Log in to have access to your personal dashboard</div>
            <div className="content">
                <form action="">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email"/>
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" id="Password"/>
                    <Link to="/profile"><button onClick={handleLogIn}>Log in</button></Link>
                </form>
                <a href="/#" className="popup-text">Forgot my password</a>
            </div>
            <div className="footer-popup">
                Not a member?
                <Link to="register" className="popup-text">Sign up here!</Link>
            </div>

        </div>
    )}
    </Popup>
    )

    
}

export default LogIn