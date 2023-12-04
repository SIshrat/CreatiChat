import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/CreatiChat Logo.png';
import User from '../user/User';
import Button from '../Button';

const Header = ({logState, toggleLogin, user, showBtn}) => {    

    return(
        <header className="header">
            <div className="website">
                <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
                <p className="name">CreatiChat</p>
                {(!logState) ?
                (<div className="guest-box">
                    <p className="guest-msg"> Hello, you are viewing as a guest </p>
                    {showBtn ?
                    <>
                        <Link to="/home" className="sign-in" onClick={toggleLogin}> Sign In </Link>
                        <Link to="/home" className="sign-up" onClick={toggleLogin}> Sign Up </Link>
                    </> : null}                                               
                </div>)
                : (<div className="guest-box">
                    <p className="guest-msg"> Welcome, {user.username}!</p>
                    <img src={user.avatar} alt="defaultAvatar" className="currentUser-img"/>
                    { showBtn ? <Link to="/" className="sign-out" onClick={toggleLogin}> Sign Out </Link> : null}
                </div>)
                }
            </div>
        </header>
    );
}

export default Header;