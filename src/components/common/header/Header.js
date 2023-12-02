import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/CreatiChat Logo.png';
import User from '../user/User';
import Button from '../Button';

const Header = (props) => {    

    return(
        <header className="header">
            <div className="website">
                <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
                <p className="name">CreatiChat</p>
                {(!props.logState) ?
                (<div className="user-box">
                    <p className="user-msg"> Hello, you are viewing as a guest </p>
                    <><Link to="/login" className="sign-in" > Sign In </Link>
                    <Link to="/signup" className="sign-up"> Sign Up </Link></>                                               
                </div>)
                : (<div className="user-box">
                    <p className="user-msg"> Welcome, {props.user.username}!</p>
                    <img src={props.user.avatar} alt="defaultAvatar" className="currentUser-img"/>
                    <Link to="/" className="sign-out" onClick={props.toggleLogin}> Sign Out </Link>
                </div>)
                }
            </div>
        </header>
    );
}

export default Header;