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

    <Popup trigger={<img src="./assets/icons/profile-icon.png" alt="profile icon" className="profile-icon"/>} modal>
    {close => (
        <div className="modal">
            <button onClick={ close } className="close popup-text">&times;</button>
            {/* <a href="/#" onClick={close} className="close popup-text">&times;</a> */}
            <div className="header-popup">Log in to have access to your personal dashboard</div>
            <div className="content">
                <form action="">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" id="Email"/>
                    <label htmlFor="Password">Password</label>
                    <input type="text" name="Password" id="Password"/>
                </form>
            </div>
            <div className="login-action">
                <Link to="/profile" className="btn-link"><button onClick={handleLogIn} className="btn">Log in</button></Link>
                <a href="/#" className="popup-text">Forgot my password</a>
            </div>
            <div className="footer-popup">
                Not a member?
                <Link to="register" className="popup-text" onClick={close}> Sign up here!</Link>
            </div>

        </div>
    )}
    </Popup>
    )

    
}

export default LogIn