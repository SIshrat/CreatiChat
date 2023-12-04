import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";
import "./Login.css"

const Login = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setEnteredPassword(value);
        setDisplayPassword('●'.repeat(value.length));
    }
    

    const submitHandler = (event) => {
        event.preventDefault();
        
        const userData = {
            username: enteredUsername,
            password: enteredPassword
        }        
    }

    return (
        <div className="auth-view">
            <h2>Login</h2>
            <div className="login-container">
                <form  onSubmit={submitHandler} className="login-form">
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
                    <Button type="submit">Login</Button>
                </form>
            </div>            
        </div>
    );
}

export default Login;