import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import CreateBox from '../common/postbox/CreateBox';

const CreatePostView = (props) => {
    return(
        <>
            <Header />
            <Navbar />
            <CreateBox />
        </>
    );
}

export default CreatePostView;