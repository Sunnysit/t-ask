import React from 'react';
import Popup from 'reactjs-popup';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

const LogOut = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogOut = () => {
        localStorage.removeItem('userData');
        dispatch({type: "USER_LOG_OUT"});
        history.push('/');

    }
    return (

    <Popup trigger={<p>Log Out</p>} modal className="modal-logout">
    {close => (
        <div className="modal">
            <button onClick={ close } className="close popup-text">&times;</button>
            {/* <a href="/#" onClick={close} className="close popup-text">&times;</a> */}
            <div className="header-popup"></div>
            <div className="content">Are you sure you want to log out?</div>
            <div className="logout-action">
                <Link to="/" className="btn-link"><button onClick={handleLogOut} className="btn">Yes</button></Link>
                <Link to="/profile" className="btn-link"><button onClick={ close } className="btn">No</button></Link>
            </div>
            <div className="footer-popup">

            </div>

        </div>
    )}
    </Popup>
    )

    
}

export default LogOut