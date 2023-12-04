import React, { useContext, useState } from "react";
import defaultAvatar from '../../images/defaultAvatar.jpg';
import Button from "../common/Button";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";

const Signup = (props) => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');
    const [displayConfirmPassword, setDisplayConfirmPassword] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState();
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);
    }
    const passwordChangeHandler = (event) => {
        const value = event.target.value;
        setPassword(value);
        setDisplayPassword('●'.repeat(value.length));
    }
    const confirmPasswordChangeHandler = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setDisplayConfirmPassword('●'.repeat(value.length));   
    }
    const avatarChangeHandler = (event) => {
        let  value = event.target.value;
        if(value.trim() === '') {value = defaultAvatar;}
        setAvatar(value);
    }


    async function submitHandler (event){
        event.preventDefault();

        try {
            const newUser = {username, password, confirmPassword, avatar};
            await axios.post("http://localhost:8080/users/signup", newUser);
            const loginRes = await axios.post("http://localhost:8080/users/login",{
                username,
                password,
            });
            setUserData({
                token: loginRes.data.token,
                user:  loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            navigate('/home');
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            alert(err.response.data.msg);
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
                    <div className="login-input">
                        <label>Confirm Password:</label>
                        <input
                            type="text"                    
                            id="password"
                            value={displayConfirmPassword}
                            onChange={confirmPasswordChangeHandler}
                        />
                    </div>
                    <div className="login-input">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            id="avatar"
                            value={avatar}
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