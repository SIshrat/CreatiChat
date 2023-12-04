import React from 'react';
import Header from '../common/header/Header';
import Navbar from '../common/navbar/Navbar';
import DeleteBox from './DeleteBox';
import { useParams } from 'react-router-dom';

const DeletePostView = (props) => {
    const params = useParams();
    const postId = params.postId;
    const postItem = props.getPostId(postId, props.userPosts);

    if(!postItem){
        return(
            <>
                <Header userData={props.userData}/>
                <Navbar logState={true}/>
                <h3>Error</h3>
                <p>Post not found</p>
            </>
        );
    } else {
        return (
            <>
                <Header userData={props.userData}/>
                <Navbar logState={true}/>
                <DeleteBox user={props.user} postItem={postItem} onDelete={props.onDelete}/>
            </>
        );
    }    
}

export default DeletePostView;