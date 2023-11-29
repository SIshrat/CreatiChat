import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import CreateBox from '../createview/CreateBox';

const EditPostView = (props) => {
    return (
        <>
            <Header logState={true} user={props.user} showBtn={false}/>
            <Navbar logState={true}/>
            <CreateBox user={props.user} onSavePostData={props.onSavePostData}/>
        </>
    );    
}

export default EditPostView;