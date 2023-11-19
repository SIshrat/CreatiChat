import React from 'react';
import { useState } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';

const GuestHomeView = () => {

    // Set user to be logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logUserHandler = () => {
        setIsLoggedIn(true);
        console.log('User logged in!');
    }
    
    return(
        <>
            <Header />
            <Navbar />
        </>
    );
    
}

export default GuestHomeView;