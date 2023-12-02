import React, { useState } from "react";
import Button from "../common/Button";
import axios from "axios";

const Login = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
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
            <form  onSubmit={submitHandler}>
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
                <Button type="submit">Login</Button>
            </form>            
        </div>
    );
}

export default Login;