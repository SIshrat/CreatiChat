import React, { useContext } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';

const ErrorPage = (props) => {
    
    return(
        <>
            <Header />
            <Navbar logState={false}/>
            <h3> Error </h3>
            <p> Page is unavaliable </p>
            <p> Please navigate to home </p>
        </>
    );
    
}

export default ErrorPage;