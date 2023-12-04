import React, { useContext } from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import PostBox from '../common/postbox/PostBox';
import UserContext from '../auth/UserContext';

const HomeView = (props) => {

    return(
        <>
            <Header />
            {(props.logState) ? (<Navbar logState={props.logState}/>) : (null)}
            <PostBox posts={props.posts} userPosts={props.userPosts} logState={props.logState}/>
        </>
    );
    
}

export default HomeView;