import React, {useContext, useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/CreatiChat Logo.png';
import UserContext from '../../auth/UserContext';

const Header = () => {
    const { userData } = useContext(UserContext);

    const [token, setToken] = useState();
    useEffect(() => {
        setToken(localStorage.getItem("auth-token"));
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("auth-token");
    }


    // If user not logged in due to not having token, renders login buttons
    if(!token || !userData || !userData.user) {
        return(
            <header className="header">
            <div className="website">
                <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
                <p className="name">CreatiChat</p>
                <div className="user-box">
                    <p className="user-msg"> Hello, you are viewing as a guest </p>
                    <><Link to="/login" className="sign-in" > Sign In </Link>
                    <Link to="/signup" className="sign-up"> Sign Up </Link></>                                               
                </div>
            </div>
        </header>
        );
    }
    // Otherwise, render username, avatar, and log out button
    return(
        <header className="header">
            <div className="website">
                <img src={logo} alt="Logo" width="84" height="87" className="logo-img" />
                <p className="name">CreatiChat</p>
                <div className="user-box">
                    <p className="user-msg"> Welcome, {userData.user.username}!</p>
                    <img src={userData.user.avatar} alt="defaultAvatar" className="currentUser-img"/>
                    <Link to="/" className="sign-out" onClick={logoutHandler}> Sign Out </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;