import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import AddPost from '../common/post/AddPost';

const CreatePostView = (props) => {

    return (
        <>
            <Header logState={props.logState}/>
            <Navbar />
            <AddPost />
        </>
    );
}

export default CreatePostView;