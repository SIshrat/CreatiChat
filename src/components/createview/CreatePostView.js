import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import CreateBox from './CreateBox';

const CreatePostView = (props) => {
    return (
        <>
            <Header logState={true} user={props.user}/>
            <Navbar logState={true}/>
            <CreateBox user={props.user} onSavePostData={props.onSavePostData}/>
        </>
    );
}

export default CreatePostView;