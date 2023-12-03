import React, { useState } from "react";
import defaulAvatar from '../../images/defaultAvatar.jpg';
import Button from "../common/Button";
import "./Login.css"

const Signup = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');
    const [enteredAvatar, setEnteredAvatar] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setEnteredPassword(value);
        setDisplayPassword('●'.repeat(value.length));
    }
    const avatarChangeHandler = (event) => {
        setEnteredAvatar(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            username: enteredUsername,
            password: enteredPassword,
            avatar: enteredAvatar
        }

        if (userData.avatar.trim() === '') {
            console.log("User did not enter avatar, setting default avatar");
            userData.avatar = defaulAvatar;
        }
        if(userData.username.trim() === '') {
            alert("Please enter a username");
        } else if (userData.password.trim() === '') {
            alert("Please enter a password");
        } else{
            console.log(userData);
        }
    }

    return (
        <div className="auth-view">
            <h2>Signup</h2>
            <div className="login-container">
                <form onSubmit={submitHandler} className="login-form">
                    <div className="login-input">
                        <label>Username:</label>
                        <input 
                            type="text"
                            id="username"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                        />
                    </div>
                    <div className="login-input">
                        <label>Password:</label>
                        <input
                            type="text"                    
                            id="password"
                            value={displayPassword}
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="login-input">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            id="avatar"
                            value={enteredAvatar}
                            onChange={avatarChangeHandler}
                        />
                    </div>
                    <Button type="submit">Signup</Button>
                </form>       
            </div>     
        </div>
    );
}

export default Signup;