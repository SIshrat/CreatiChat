import React from "react";
import RegisterBox from "./RegisterBox";
import Header from "../common/header/Header";
import Navbar from "../common/navbar/Navbar";

const LoginView = (props) => {
    return (
    <>
        <Header logState={props.logState} toggleLogin={props.toggleLogin} user={props.user}/>
        <Navbar logState={props.logState}/>
        <RegisterBox posts={props.posts} loggingIn={true}/>
    </>
    );
}

export default LoginView;