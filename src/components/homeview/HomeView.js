import React from 'react';
import { useState } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import PostBox from '../common/postbox/PostBox';

const HomeView = (props) => {

    return(
        <>
            <Header logState={props.logState} toggleLogin={props.toggleLogin} user={props.user}/>
            {(props.logState) ? (<Navbar />) : (null)}
            <PostBox posts={props.posts} userPosts={props.userPosts} logState={props.logState}/>
        </>
    );
    
}

export default HomeView;