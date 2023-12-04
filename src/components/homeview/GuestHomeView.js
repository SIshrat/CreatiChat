import React, { useContext } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import PostBox from '../common/postbox/PostBox';

const GuestHomeView = (props) => {

    return(
        <>
            <Header />
            {(props.logState) ? (<Navbar />) : (null)}
            <PostBox posts={props.posts} userPosts={props.userPosts} logState={props.logState}/>
        </>
    );
    
}

export default GuestHomeView;