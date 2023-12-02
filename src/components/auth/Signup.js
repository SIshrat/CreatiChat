import React, { useState } from "react";
import defaulAvatar from '../../images/defaultAvatar.jpg';
import Button from "../common/Button";

const Signup = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredAvatar, setEnteredAvatar] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
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
            <form onSubmit={submitHandler}>
                <label>Username:</label>
                <input 
                    type="text"
                    id="username"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label>Password:</label>
                <input
                    type="text"                    
                    id="password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                />
                <label>Image URL:</label>
                <input
                    type="text"
                    id="avatar"
                    value={enteredAvatar}
                    onChange={avatarChangeHandler}
                />
                <Button type="submit">Signup</Button>
            </form>            
        </div>
    );
}

export default Signup;