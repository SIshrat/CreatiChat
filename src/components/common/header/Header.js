import React from 'react';
import './Header.css';
import logo from './CreatiChat Logo.png';
import Button from '../Button';

const Header = () => {
    return(
        <header className="header">
        <div className="website" classname="website-hdr1">
            <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
            <p className="name">CreatiChat</p>
            <div className="guest-box">
                <p className="guest-msg">Hello, you are viewing as a guest</p>
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </div>
        <div classname="website-hdr2">
        </div>
        </header>
    );
}

export default Header;