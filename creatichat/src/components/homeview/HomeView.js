import React from 'react';
import { useState } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import PostBox from '../common/postbox/PostBox';

const HomeView = ({posts, logState, toggleLogin}) => {

    return(
        <>
            <Header logState={logState} toggleLogin={toggleLogin}/>
            <Navbar />
            <PostBox posts={posts} logState={logState}/>
        </>
    );
    
}

export default HomeView;