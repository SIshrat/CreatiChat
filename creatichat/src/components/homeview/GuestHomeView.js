import React from 'react';
import { useState } from 'react';

const GuestHomeView = () => {

    // Set user to be logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const logUserHandler = () => {
      setIsLoggedIn(true);
      console.log('User logged in!');
    }

    
}

export default GuestHomeView;