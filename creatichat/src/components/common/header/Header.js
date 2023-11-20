import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './CreatiChat Logo.png';
import Button from '../Button';

const Header = ({logState, toggleLogin}) => {    

    return(
        <header className="header">
            <div className="website">
                <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
                <p className="name">CreatiChat</p>
                {(!logState) ?
                (<div className="guest-box">
                    <p className="guest-msg"> Hello, you are viewing as a guest </p>
                    <button className="sign-in" onClick={toggleLogin}> Sign In </button>
                    <button className="sign-up" onClick={toggleLogin}> Sign Up </button>                                                          
                </div>)
                : (<div className="guest-box">
                    <p className="guest-msg"> Welcome, DefaultUserName! </p>
                    <Link to="/" className="sign-out" onClick={toggleLogin}> Sign Out </Link>
                </div>)
                }
            </div>
        </header>
    );
}

export default Header;