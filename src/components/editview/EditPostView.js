import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import EditBox from './EditBox';
import { Link, useParams } from 'react-router-dom';

const EditPostView = (props) => {
    const params = useParams();
    const postId = params.postId;
    const postItem = props.getPostId(postId, props.userPosts);
    
    if(!postItem){        
        return(
            <>
                <Header logState={true} user={props.user} showBtn={false}/>
                <Navbar logState={true}/>
                <h3>Error</h3>
                <p>Post not found</p>
            </>
        );
    } else {
        return (
            <>
                <Header logState={true} user={props.user} showBtn={false}/>
                <Navbar logState={true}/>
                <EditBox user={props.user} postItem={postItem}/>
            </>
        );
    }
}

export default EditPostView;