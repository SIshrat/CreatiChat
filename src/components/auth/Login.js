import React, { useContext, useState } from "react";
import Button from "../common/Button";
import axios from "axios";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const Login = (props) => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');
    const [error, setError] = useState();
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayPassword('●'.repeat(value.length));
    }
    
    async function submitHandler(event){
        event.preventDefault();
        try {
            const loginUser = {username, password};
            const loginRes = await axios.post("http://localhost:8080/users/login", loginUser);
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            navigate('/home');
        } catch (err){
            err.response.data.msg && setError(err.response.data.msg);
            alert(err.response.data.msg);
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
                            value={username}
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