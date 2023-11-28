import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import AddPost from './AddPost';
import CreateBox from './CreateBox';

const CreatePostView = (props) => {
    return (
        <>
            <Header logState={true} user={props.user} showBtn={false}/>
            <Navbar />
            <CreateBox user={props.user} onSavePostData={props.onSavePostData}/>
        </>
    );
}

export default CreatePostView;