import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import EditBox from './EditBox';

const EditPostView = (props) => {
    return (
        <>
            <Header logState={true} user={props.user} showBtn={false}/>
            <Navbar logState={true}/>
            <EditBox user={props.user}/>
        </>
    );    
}

export default EditPostView;